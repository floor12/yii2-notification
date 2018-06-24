<?php
/**
 * Created by PhpStorm.
 * User: floor12
 * Date: 24.06.2018
 * Time: 12:51
 */

namespace floor12\notification;

use yii\helpers\Html;
use \Yii;

class Notification
{

    const TYPE_INFO = "0";
    const TYPE_SUCCESS = "1";
    const TYPE_ERROR = "2";

    public static function notification($text, $type): string
    {
        NotificationAsset::register(Yii::$app->getView());
        return Html::script("info(\"{$text}\",{$type});");
    }

    public static function info($text): string
    {
        return self::notification($text, self::TYPE_INFO);
    }

    public static function error($text): string
    {
        return self::notification($text, self::TYPE_ERROR);
    }

    public static function success($text): string
    {
        return self::notification($text, self::TYPE_SUCCESS);
    }

}