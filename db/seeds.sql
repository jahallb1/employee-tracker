INSERT INTO department (name)
VALUES
    ('Legal'),
    ('Finance'),
    ('HR'),
    ('Sales'),
    ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Lawyer', 50000, 1),
    ('CPA', 45000, 2),
    ('HR Manager', 25000, 3),
    ('Sales Lead', 30000, 4),
    ('Lead Developer', 65000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jason', 'Brown', 1, NULL),
    ('Thomas', 'Red', 2, 1),
    ('Jennifer', 'Blue', 3, NULL ),
    ('Christian', 'Black', 4, 2),
    ('Kim', 'Green', 5, NULL);