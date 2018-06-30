# yii2-notification
[![Latest Stable Version](https://poser.pugx.org/floor12/yii2-notification/v/stable)](https://packagist.org/packages/floor12/yii2-notification)
[![Latest Unstable Version](https://poser.pugx.org/floor12/yii2-notification/v/unstable)](https://packagist.org/packages/floor12/yii2-notification)
[![Total Downloads](https://poser.pugx.org/floor12/yii2-notification/downloads)](https://packagist.org/packages/floor12/yii2-notification)
[![License](https://poser.pugx.org/floor12/yii2-notification/license)](https://packagist.org/packages/floor12/yii2-notification)

This simple extension helps to show nice notifications in browser. 
It uses FontAwesome icons and can be customised by overwriting base CSS styles.  

![Image](https://floor12.net/images/yii2-notification.png)

Installation
------------
Just run:
```bash
$ composer require floor12/yii2-notification
```
or add this to the require section of your composer.json.
```json
"floor12/yii2-notification": "dev-master"
```

To use javascript way, add `floor12\notification\NotificationAsset` in your app.

In case if using  PHP api, `NotificationAsset` will be included in your app by `Notification` class.

Usage
-----
Show notification by run JS function `info(text,type)` with text and one of this types:

- `0` - information;
- `1` - success;
- `2` - error;

For example:

```js 
if (success == true)
    info('Model  saved',1);    
else
    info('Something wrong here',2);
```

Its also possible to show notifications by calling PHP API: 

```php
use floor12\notification\Notification;

Notification::info('The form is loading...');
Notification::error('Pleas fill all required fields');
Notification::success('This model is saved');
```
