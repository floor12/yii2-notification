<?php

namespace floor12\notification;

use yii\web\AssetBundle;
use \yii\web\View;

class NotificationAsset extends AssetBundle
{
    public $jsOptions = ['position' => View::POS_HEAD];
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
