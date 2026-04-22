import os
import re
from pathlib import Path

# Папка, где лежит скрипт
BASE_DIR = Path(__file__).parent

# Папка назначения
TARGET_DIR = BASE_DIR / "clients"
TARGET_DIR.mkdir(exist_ok=True)

# Регулярка для файлов вида 01.png, 02.png и т.д.
pattern = re.compile(r"^(\d+)\.png$")

files = []

# Собираем подходящие файлы
for file in BASE_DIR.iterdir():
    if file.is_file():
        match = pattern.match(file.name)
        if match:
            number = int(match.group(1))
            files.append((number, file))

# Сортируем по числу
files.sort(key=lambda x: x[0])

# Переименование и копирование
for i, (_, file) in enumerate(files, start=1):
    new_name = f"clients-{i}.png"
    target_path = TARGET_DIR / new_name

    # Перемещение (если нужно копирование — скажи, поменяем)
    file.rename(target_path)

print(f"Готово. Обработано файлов: {len(files)}")