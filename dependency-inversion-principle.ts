"Dependency Inversion Principle: High level modules should not depend upon low level modules. Rather, both should depend upon abstractions."

/* We can see an example of selecting database. Suppose, you have built an app's frontend and apis according to client's need but you don't know what might be the database. 

If we use the following example of code , then we're statically binding a database which is depending on a low level module which is not recommended */

class Database { 
    selectDatabase(MySQL: any) { 
        // some code which will be used for connectiong to MySQL Database.
    }
}

/*  */

class Database { 
    connectDatabase(MySQL: string) { 
        // some code which will be used for connectiong to MySQL Database.
    }
}


/* If the client changes the mind and now want to integrate PostgreSQL or some other Database then the upper example will not work unless we change the method but as per the principle, high level class should not depend on low level class.

So, instead using the previous code example, below approach will be better to prevent depending on low level modules of High level classes. */

interface Database {
    connectDatabase(databaseName: string);
 }

class MySQL implements Database { 
    connectDatabase(MySQL: string) { 
         // some code which will be used for connectiong to MySQL Database.
    }
}

class PostgreSQL implements Database { 
    connectDatabase(PostgreSQL: string) { 
         // some code which will be used for connectiong to PostgreSQL Database.
    }
}
