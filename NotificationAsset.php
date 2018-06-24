<?php

namespace floor12\notification;

use yii\web\AssetBundle;

class NotificationAsset extends AssetBundle
{
    public $sourcePath = '@vendor/floor12/yii2-notification/';
    public $css = [
        'floor12-notification.css'
    ];
    public $js = [
        'floor12-notification.js'
    ];
    public $depends = [
        'yii\web\JqueryAsset',
        'rmrevin\yii\fontawesome\AssetBundle',
    ];

}
