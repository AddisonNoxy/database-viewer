INSERT INTO department (name)
VALUES  ("Human Resources"),
        ("Research and Development"),
        ("Public Relations"),
        ("Sanitation"),
        ("Commercialism");

INSERT INTO roles (title, salary, department_id)  
VALUES  ("Head of HR", 3700.00, 1),
        ("Head of Research", 4000.00, 2),
        ("Sales Associate", 1000.00, 5),
        ("Senior Sales Associate", 1400.00, 5),
        ("Janitor", 1100.00, 4),
        ("PR Manager", 3200.00, 3),
        ("Assistant PR Manager", 2700.00, 3),
        ("Staffing Manager", 3000.00, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Aisha", "Patel", 4),
        ("Juan", "Gonzalez", 2),
        ("Amir", "Khan", 1),
        ("Svetlana", "Petrov", 3),
        ("Leila", "Kim", 5),
        ("Mohammed", "Al-Mansoor", 1),
        ("Sofia", "Ramirez", 2),
        ("Hiroshi", "Tanaka", 3),
        ("Isabella", "Costa", 4),
        ("Nguyen", "Minh", 1),
        ("Khaled", "Abadi", 5),
        ("Bianca", "Santos", 3),
        ("Luca", "Rossi", 2),
        ("Maya", "Singh", 1),
        ("Olaf", "Bjornsson", 4),
        ("Amara", "Okafor", 5),
        ("Anika", "Patel", 3),
        ("Rafael", "Silva", 2),
        ("Mei", "Chen", 1),
        ("Dmitri", "Ivanov", 4);