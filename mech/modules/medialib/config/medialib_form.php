<?php defined('BASEPATH') or exit('No direct script access allowed');

// Library tpl type
$config['tpl_type'] = [
    '0' => 'Тип-1 (вибір з усіх завантажених файлів)',
    '1' => 'Тип-2 (вибір файлів для конкретної сторінки)'
];

// Media type
$config['src'] = [
    'file' => 'Файл',
    'icon' => 'Іконка',
    'url'  => 'Посилання'
];

// Sub items sort
$config['items_sort'] = [
    'sort'    => 'власне',
    'created' => 'за датою створення',
    'updated' => 'за датою оновлення'
];

// Sub items sort direction
$config['items_sort_dir'] = [
    'asc'  => 'за зростанням',
    'desc' => 'за спаданням'
];

// Items image width
$config['subs_img_w'] = [
    'type'        => 'number',
    'name'        => 'options[img_w]',
    'min'         => 0,
    'placeholder' => 'auto'
];

// Items image height
$config['subs_img_h'] = [
    'type'        => 'number',
    'name'        => 'options[img_h]',
    'min'         => 0,
    'placeholder' => 'auto'
];

// Items thumb width
$config['subs_thumb_w'] = [
    'type'        => 'number',
    'name'        => 'options[thumb_w]',
    'min'         => 0,
    'placeholder' => 'auto'
];

// Items thumb height
$config['subs_thumb_h'] = [
    'type'        => 'number',
    'name'        => 'options[thumb_h]',
    'min'         => 0,
    'placeholder' => 'auto'
];
