#!/bin/bash

# Добавляем export {} в конец файлов, если их там нет
for file in src/components/*.tsx src/pages/*.tsx; do
  if [ -f "$file" ]; then
    if ! grep -q "^export {}" "$file"; then
      echo "" >> "$file"
      echo "export {};" >> "$file"
      echo "Добавлен export {} в $file"
    fi
  fi
done

# Обновляем tsconfig.json
node -e "
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
config.compilerOptions.isolatedModules = false;
fs.writeFileSync('tsconfig.json', JSON.stringify(config, null, 2));
console.log('tsconfig.json обновлен');
"

echo "Готово! Перезапустите npm start"