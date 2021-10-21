INSERT INTO department ( id, department_name)
VALUES ( 1, "Sales"),
        (2, "Enginering"),
        (3, "Finance");
        

INSERT INTO roles ( department_id, title, salary)
VALUES   (1,  "Sales Lead", 8000),
         (1,  "Sales Spokeman", 6000),
         (2,  "Lead Engineer", 10000),
         (2,  "Software Engineer", 9000),
         (3,  "Account Manager", 12000),
         (3,  "Accountant", 11000);

INSERT INTO employees (manager_id, first_name, last_name)
VALUES  (26, "Josh", "Tyler"),
         (52, "Bob", "Builder"),
         (47, "John", "Wick"),
         (85, "Huncho", "Jack"),
         (56, "Luke", "Skywalker");
       