<?php
/**
 * Created by PhpStorm.
 * User: floor12
 * Date: 24.06.2018
 * Time: 12:51
 */

namespace floor12\notification;

use yii\helpers\Html;

class Notification
{

    const TYPE_INFO = "0";
    const TYPE_SUCCESS = "1";
    const TYPE_ERROR = "2";

    public static function notification($text, $type): string
    {
        return Html::script("info(\"{$text}\",{$type});");
    }

    public function info($text): string
    {
        return self::notification($text, self::TYPE_INFO);
    }

    public function error($text): string
    {
        return self::notification($text, self::TYPE_ERROR);
    }

    public function success($text): string
    {
        return self::notification($text, self::TYPE_SUCCESS);
    }

}