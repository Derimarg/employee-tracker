
![Repo Size][repo-size]
![Language][GitHub-language]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

[![LinkedIn][linkedin-shield]][linkedin-url]
![MIT License][license-shield]

<br />
<p align="center">



<h3 align="center" id="employee-tracker">Employee Tracker</h3>

<p align="center">
As a business owner I want to be able to view and manage the departments, roles,<br /> and employees in my company, so that I can organize and plan my business.
<br />
<a href="#description"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="#example">View Demo</a>
.
<a href="https://github.com/Derimarg/employee-tracker/issues">Report Bug</a>
·
<a href="https://github.com/Derimarg/employee-tracker/issues">Request Feature</a>
</p>
</p>
<br />
<br />



<details open="open">
<summary>Table of Contents</summary>
<ul>
<li><a href="#description">Description</a></li>
<li><a href="#technologies">Technologies</a></li>
<li><a href="#how-to-download">Download</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#test">Test</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#contributing">Contributing</a></li>

<li><a href="#questions">Questions</a></li>
<li><a href="#license">License</a></li>
</ul>
</details>


---
  
## Description
  
These is a simple employee tracker, the purpose is to be able to view and manage the departments, roles, and employees in a company, so that give the ability of organize and plan a business. Will follow the next conditions.

- This application will work with command-line that accepts user input.
- Starting the application, will be presented the following options: 
  - view all departments
  - view all roles
  - view all employees
  - add a department 
  - add a role
  - add an employee
  - update an employee role

- Choosing to view all departments, will be presented a formatted table showing:
  - department names
  - department ids

- Choosing to view all roles, will be presented:
  - job title
  - role id
  - department that role belongs to
  - salary for that role

- Choosing to view all employees, will be presented a formatted table showing employee data including:
  - employee ids
  - first names
  - last names
  - job titles
  - departments
  - salaries
  - managers that the employees report to

- Choosing to add a department, will be prompted to enter the name of the department and that department is added to the database.
- Choosing to add a role, will be prompted to enter:
  - name
  - salary
  - department for the role, and role will be added to the database.

- Choosing to add an employee, wil be prompted to enter the employee’s:
  - first name
  - last name
  - role
  - manager and that employee is added to the database.

- Choosing to update an employee role, will be prompted to select an employee to update and their new role and this information is updated in the database.
<br />
<br />

[Back To Top](#employee-tracker)

---

### Example:
  
  ![Demo](./assets/images/demo.gif)

## Technologies

- <p><a href="https://nodejs.org/">Node.js</a></p>
- <p><a href="https://www.npmjs.com/">NPM</a></p>
- <p><a href="https://dev.mysql.com">MySQL</a></p>
- <p><a href="https://www.npmjs.com/package/inquirer">NPM Inquirer.js</a></p>
- <p><a href="https://www.npmjs.com/package/mysql2">NPM Node MySQL 2</a></p>
- <p><a href="https://www.npmjs.com/package/console.table">NPM console.table</a></p>

[Back To Top](#employee-tracker)

---

## How to Download

- Simply copy the **SSH** to the terminal or Download the **ZIP File**:

## Installation

- Use the follow command at your terminal, **git clone** (Create a working copy at your local repository):

  ```
  git clone git@github.com:Derimarg/employee-tracker.git
  ```

- After cloned the repository, create your own repository, copy the files to your repository and type in your terminal the follow commands. 

  ```
  git status

  git add -A

  git commit -m "Message to commit."

  git push or git push origin main
  ```

## Prerequisites

Before of using this application, is require to install dependencies, run the following command in your terminal:

  ```
  npm i
  ```

[Back To Top](#employee-tracker)

---


  ## Usage

  open source application
    

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Derimarg/employee-tracker/issues) for a list of proposed features (and known issues).

[Back To Top](#employee-tracker)

---

<!-- CONTRIBUTORS -->
## Contributing

Contributions are part of this open source project. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/name-of-feature`)
3. Commit your Changes (`git commit -m "Add some feature"`)
4. Push to the Branch (`git push origin feature/name-of-feature`)
5. Open a Pull Request



## Questions

For additional help or questions about collaboration, contact me at: derimargray@gmail.com

- GitHub - [Derimarg](https://github.com/Derimarg/)
- Linkedin - [Derimar Gray](https://www.linkedin.com/in/derimar-gray-676275132/)
- Project Repository Link: https://github.com/Derimarg/employee-tracker

[Back To Top](#employee-tracker)

---


## License

MIT License

Copyright (c) 2021 Derimar Gray

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  

[repo-size]: https://img.shields.io/github/repo-size/Derimarg/employee-tracker?style=for-the-badge
[GitHub-language]: https://img.shields.io/github/languages/top/Derimarg/employee-tracker?color=yellow&style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/Derimarg/employee-tracker.svg?style=for-the-badge
[contributors-url]: https://github.com/Derimarg/employee-tracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Derimarg/employee-tracker.svg?color=9cf&style=for-the-badge
[forks-url]: https://github.com/Derimarg/employee-tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/Derimarg/employee-tracker.svg?color=blueviolet&style=for-the-badge
[stars-url]: https://github.com/Derimarg/employee-tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/Derimarg/employee-tracker.svg?style=for-the-badge
[issues-url]: https://github.com/Derimarg/employee-tracker/issues
[license-shield]: https://img.shields.io/static/v1?label=license&message=MIT&color=yellowgreen.svg&style=for-the-badge


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/derimar-gray-676275132/
  