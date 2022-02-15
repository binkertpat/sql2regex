# table of content

<!--ts-->
* [table of content](#table-of-content)
* [github stats](#github-stats)
* [project stats](#project-stats)
* [sonarqube quality management](#sonarqube-quality-management)
* [socials](#socials)
* [sql2regex](#sql2regex)
   * [java-dependencies](#java-dependencies)
   * [npm-dependencies](#npm-dependencies)
   * [scss → css](#scss--css)
   * [install/build application](#installbuild-application)
   * [start application](#start-application)
   * [open TODOs before project start](#open-todos-before-project-start)
   * [heroku deploy](#heroku-deploy)
   * [project management](#project-management)
   * [contributers](#contributers)

<!-- Added by: runner, at: Tue Feb 15 15:54:53 UTC 2022 -->

<!--te-->

# github stats
[![LICENCE](https://img.shields.io/github/license/binkertpat/sql2regex.svg)](https://github.com/binkertpat/sql2regex)
[![ISSUES](https://img.shields.io/github/issues/binkertpat/sql2regex.svg)](https://github.com/binkertpat/sql2regex)
[![ISSUES](https://img.shields.io/github/issues-closed/binkertpat/sql2regex.svg)](https://github.com/binkertpat/sql2regex)
[![PULL REQUESTS](https://img.shields.io/github/issues-pr/binkertpat/sql2regex.svg)](https://github.com/binkertpat/sql2regex)
[![PULL REQUESTS](https://img.shields.io/github/issues-pr-closed/binkertpat/sql2regex.svg)](https://github.com/binkertpat/sql2regex)

# project stats
[![BUILT WITH](https://github-readme-stats.vercel.app/api/top-langs/?username=binkertpat&theme=blue-green)](https://github.com/binkertpat/sql2regex)
<br>
[![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/binkertpat/sql2regex)
[![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)](https://github.com/binkertpat/sql2regex)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://github.com/binkertpat/sql2regex)
[![JAVA](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)](https://github.com/binkertpat/sql2regex)
[![SPRING](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://github.com/binkertpat/sql2regex)
[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/binkertpat/sql2regex)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/binkertpat/sql2regex)

# sonarqube quality management
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=bugs)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=binkertpat_sql2regex&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=binkertpat_sql2regex)

# socials

[![TWITTER](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sql2regex)

# sql2regex
## java-dependencies
- sass-maven-plugin
- spring-boot-configuration-processor
- spring-boot-devtools
- spring-boot-maven-plugin
- heroku-maven-plugin
- maven-dependency-plugin
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
- [ ] github source code button on top right navbar
- [ ] footer
- [ ] explanation part on website (what, why, how, ...)
- [ ] create and insert an nice logo
- [ ] generate favicons from logo
- [ ] set og meta tags
- [x] deploy to heroku apps
- [x] add SonarQube
- [x] add automatic TOC 
- [ ] @Alletkla - get account on heroku.com for collaborate by deployment 

## heroku deploy 
<a href="https://sql2regex.herokuapp.com/"> 
  <img src="https://cdn.worldvectorlogo.com/logos/heroku-1.svg" height="30">
</a>
<br>
<code>heroku create</code>
<br>
<code>heroku apps:rename sgl2regex --app [autogenerated name]</code>
<br>
<code>./mvnw clean heroku:deploy</code>

## project management

<a href="https://trello.com/b/yogXJiVa/sql2regex"> 
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2000px-Trello-logo-blue.svg.png" height="25">
</a>

## contributers
- Patrick Binkert, Technische Universität Dresden, Student teacher, 10th semester (physics and computer science)
- Maximilian Förster, Technische Universität Dresden, Student teacher, 10th semester (physics and computer science)

<br> 

[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source-175x29.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
