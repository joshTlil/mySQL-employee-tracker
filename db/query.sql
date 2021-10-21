-- SELECT employees.first_name AS employees, employees.last_name
-- FROM employees
-- LEFT JOIN  department
-- ON department.department_name = department_name
-- ORDER BY department.department_name;

-- SELECT *
-- FROM roles
-- JOIN department
-- ON department.department_name = department_name
-- ORDER BY roles.department_id;

-- SELECT *
-- FROM department
-- INNER JOIN employees
-- ON employees.manager_id = manager_id
-- ORDER BY employees.first_name;

-- SELECT * 
-- FROM department
-- JOIN employees
-- JOIN roles
-- ON employees.manager_id = manager_id
-- ORDER BY employees.first_name;

SELECT DISTINCT employees.first_name, employees.last_name, roles.title, roles.salary, roles.department_id , department.department_name
FROM roles
 JOIN employees
 JOIN department
ON department.department_name = department_name
ORDER BY department.id;
-- try to do left right joins