// App.js - Main application component
const App = () => {
    return (
      <div className="app">
        <div className="mb-4">
          <p className="text-gray-600">
            Write and execute SQL queries against mock databases. Learn SQL syntax, practice queries, 
            and understand database concepts in a safe sandbox environment.
          </p>
        </div>
        
        <SQLPlayground />
        
        <div className="mt-8 text-sm text-gray-500">
          <h3 className="font-medium text-gray-700 mb-2">About SQL Playground</h3>
          <p>
            This is an educational tool that simulates a database environment for learning SQL.
            All queries run in-memory and no actual database is used.
            The application includes sample data for employees, departments, and projects tables.
          </p>
        </div>
      </div>
    );
  };