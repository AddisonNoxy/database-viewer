INSERT INTO department (id, name)
VALUES  (1, "Human Resources"),
        (2, "Research and Development"),
        (3, "Public Relations"),
        (4, "Sanitation"),
        (5, "Commercialism");

INSERT INTO roles (id, title, salary, department_id)  
VALUES  (1, "Head of HR", 3700.00, 1),
        (2, "Head of Research", 4000.00, 2),
        (3, "Sales Associate", 1000.00, 5),
        (4, "Senior Sales Associate", 1400.00, 5),
        (5, "Janitor", 1100.00, 4),
        (6, "PR Manager", 3200.00, 3),
        (7, "Assistant PR Manager", 2700.00, 3),
        (8, "Staffing Manager", 3000.00, 1);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES  (1, "Aisha", "Patel", 4),
        (2, "Juan", "Gonzalez", 2),
        (3, "Amir", "Khan", 1),
        (4, "Svetlana", "Petrov", 3),
        (5, "Leila", "Kim", 5),
        (6, "Mohammed", "Al-Mansoor", 1),
        (7, "Sofia", "Ramirez", 2),
        (8, "Hiroshi", "Tanaka", 3),
        (9, "Isabella", "Costa", 4),
        (10, "Nguyen", "Minh", 1),
        (11, "Khaled", "Abadi", 5),
        (12, "Bianca", "Santos", 3),
        (13, "Luca", "Rossi", 2),
        (14, "Maya", "Singh", 1),
        (15, "Olaf", "Bjornsson", 4),
        (16, "Amara", "Okafor", 5),
        (17, "Anika", "Patel", 3),
        (18, "Rafael", "Silva", 2),
        (19, "Mei", "Chen", 1),
        (20, "Dmitri", "Ivanov", 4);