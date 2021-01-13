import getAllFiles from 'get-all-files';
import fs from 'fs';

const replace = (absolutePath, phrase, replacer) => {
    const allFiles = getAllFiles.sync.array(absolutePath, {
        resolve: true,
    });

    allFiles.forEach((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) return console.log(err);
            const regex = new RegExp(phrase, 'g');
            const result = data.replace(regex, replacer);

            fs.writeFile(file, result, 'utf-8', (err) => {
                if (err) return console.log(err);
            });
        });
    });
};

replace('%WFOUserName%', 'Lol');
