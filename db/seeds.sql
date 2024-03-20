INSERT INTO department (name)
VALUES ("Management"),
       ("Sales"),
       ("Accounting"),
       ("Product Oversight"),
       ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES  ("Regional Manager",143000,1),
        ("Regional Director of Sales",103000,2),
        ("Sales Rep.",82000,2),
        ("Chief Accountant",149000,3),
        ("Accountant",72000,3),
        ("Customer Service Representative",74000,4),
        ("Supplier Relations Representative",83000,4),
        ("Quality Assurance Representative",50000,4),
        ("Warehouse Foreman",68000,5),
        ("Warehouse Staff",45000,5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Dwight","Schrute",1,null),
        ("Phyllis","Vance",2,1),
        ("Malcolm","Jones",3,2),
        ("Clark","Green",3,2),
        ("Danny","Cordray",3,2),
        ("Oscar","Martinez",4,1),
        ("Dakota","White",5,6),
        ("Pete","Miller",6,1),
        ("Meredith","Palmer",7,1),
        ("Devon","White",8,1),
        ("Val","Johnson",9,1),
        ("Nate","Johnson",10,11),
        ("Glenn","Green",10,11),
        ("Philip","Franz",10,11),
        ("Matt","Mattei",10,11),
        ("Hidetoshi","Hasagawa",10,11);

       
