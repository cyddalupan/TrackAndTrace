<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[British Software Development](https://www.britishsoftware.co)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- [UserInsights](https://userinsights.com)
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)
- [Invoice Ninja](https://www.invoiceninja.com)
- [iMi digital](https://www.imi-digital.de/)
- [Earthlink](https://www.earthlink.ro/)
- [Steadfast Collective](https://steadfastcollective.com/)
- [We Are The Robots Inc.](https://watr.mx/)
- [Understand.io](https://www.understand.io/)
- [Abdel Elrafa](https://abdelelrafa.com)
- [Hyper Host](https://hyper.host)

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).


## Chat database.

For the chatbot to know what to do, you need to feed the fb_quests table.
the fb_quests table has six columns to fill up:
- message. the message field is what the bot is going to send to the user. 
  - the limit is 255 characters but avoid reaching the limit and try to seperate the messages by using multiple fb_quests.
  - you can put variables in the message using the double curly brackets {{putVariableHere}}.
  - the available variables by defailt is the users data in the fb_users table. and the users message.
  - for example. since the fb_users table has fb_name you can use it like:
    - hi {{fb_name}}
  - to add more variables to use, you can fill up the get_query. (continue reading).
- get_query. the get_query field is where you put a raw query, the flat result will be added to the avaiable variables you can use.
  - its best to try the query first in the phpmyadmin.
  - for example you put to get_query 
  - ```
  "SELECT `name`, `address` FROM `people` WHERE id = 2"
  ```
  - the example result will be name = patrick Retes and address = Manila
  - then you can use this as. Hi {{name}}. you live at {{address}}
    - the output will be. Hi patrick Retes. you live at Manila
  - do take note that the resuts you get can also be use on correct_query field and wrong,query
- rule. the rule field is the list of expected answers from the user. you can leave this blank if you expect no specific answer.
  - the format for the rule is simple. answer colon id.
    - the answer is the exact word we expect from the user.
      - you can also use {{variables}}
    - the id is the next fb_quests id that the user needs to do.
    - so it will look like this:
      - yes:5
      - no:7
      - {{fb_name}}:12
    - you can also use multiple expected answers separated by comma
    - example:
      - yes:5,no:7,{{fb_name}}:12
- correct_query. if the user reply is inside the rule. the query you put here will run.
  - this usualy contains insert and update queues.
  - take note that you can also put {{variables}} in the query
- wrong_redirect_id. you simply put the next fb_quests_id when the user reply is not inside the rule.
- wrong_query. when the user reply with out of rule. the query you put here will run.
  - this usualy contains insert and update queues.
  - take note that you can also put {{variables}} in the query.
 






