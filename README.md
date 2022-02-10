# sql2regex

## java-dependencies
- Sass Compiler Plugin
- spring-boot-configuration-processor
- spring-boot-devtools
- spring-boot-maven-plugin
- spring-boot-starter-test
- spring-boot-starter-thymeleaf
- spring-boot-starter-web

## npm-dependencies
- npm-bootstrap: 5.1.0
- npm-copyfiles: ^2.1.0
- node-version: v12.16.3
- npm-version: 6.14.4

## scss → css
hard compile:
<code>npm run scss</code>

compile changes on runtime:
<code>npm run watch</code>

## install/build application
<code>./mvnw clean install</code>

## start application
<code>./mvnw spring-boot:run </code>

## open TODOs before project start
- [ ] source code button navbar
- [ ] footer
- [ ] explanation part on website
- [ ] logo
- [ ] generate favicons
- [ ] set og meta tags
- [x] deploy to heroku apps
- [ ] @Alletkla - get account on heroku.com for collaboration 

## heroku deploy https://sql2regex.herokuapp.com/
- heroku create
- heroku apps:rename sgl2regex --app [autogenerated name]
- ./mvnw clean heroku:deploy

## contributers
- Patrick Binkert, Technische Universität Dresden, Student teacher, 10th semester (physics and computer science)
- Maximilian Förster, Technische Universität Dresden, Student teacher, 10th semester (physics and computer science)



