# Krieffer_Handlebars

## Node Express Handlebars
  This assignment was to design an 'Eat Da Burger' application that allows the user to enter in a burger name and can click a button to 'Devour it!'. The burger logger was built with MySQL, Node, Express, Handlebars and a homemade ORM.

### ORM Create
  The screenshot below shows the create function in the homemade orm. When 'creating', or adding a burger, this function will add the burger name and its value to the burger table, in the burgers database. The if statment checks the burgers boolean value, whether it has been devoured or not. 
  
![](https://github.com/Krieffer21/Krieffer_Handlebars/blob/master/public/assets/screenshots/ORM.png)

### Router PUT Method
  The screenshot below shows the router put method for updating the data. More specifically when a burger has been devoured the boolean value is updated in the database.  

![](https://github.com/Krieffer21/Krieffer_Handlebars/blob/master/public/assets/screenshots/PUT.png)

### Handlebars
  The scrrenshot below is from the index.handlebars file that will display the burger names in a list, based on the devoured boolean value. 

![handlebars code](https://github.com/Krieffer21/Krieffer_Handlebars/blob/master/public/assets/screenshots/index.png)

  The screenshot below is from the burger.handlebars file that creates the 'devour it!' button.  
![handlebars code](https://github.com/Krieffer21/Krieffer_Handlebars/blob/master/public/assets/screenshots/burger.png)

### Working application
  The gif below shows the functionality of the burger application. This is the link to the deployed app, LINK . As you can see in the gif below when a burger name is entered it appears in the list of burgers ready to be devoured. When the 'Devour it!' button is clicked the burger name now appears in the list of burgers that have been devoured.  

![gif](https://github.com/Krieffer21/Krieffer_Handlebars/blob/master/public/assets/screenshots/burger.gif)
