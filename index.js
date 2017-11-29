
    // start with strings, numbers and booleans
    // let age = 100;
    // let age2 = age;
    // console.log(age, age2);
    // age = 200;
    // console.log(age,age2);
    // //returns 200 100

    // let name = 'Em';
    // let name2 = name;
    // // prints Em Em
    // console.log(name, name2);

    // name = 'Emily';
    // // prints Emily Em
    // console.log(name, name2);

    // Let's say we have an array
        const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
        console.log(players);

    // and we want to make a copy of it.
    // You might think we can just do something like this:

        const team = players;
        // console.log(team, players);
        

    // however what happens when we update that array?
        team[3] = 'Lux';
        console.log(team);
        console.log(players);
        

    // now here is the problem!
        // index 3 of team is Lux
        // index 3 of players is also Lux;
        // important note because this means that team actually is players and changes it.
        // if you reference an array it updates the original array

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    // one way
        const team2 = players.slice(); //if you pass nothing will just give a copy of of the array
        team2[3] = "whoo";
        console.log(team2);
        console.log(players);

    // or create a new array and concat the old one in
        const team3 = [].concat(players);
        team3[3] = 'lala'
        console.log(team3);

    // or use the new ES6 Spread
        const team4 = [...players];
        team4[3] = 'blah blah';
        console.log(team4);

        const team5 = Array.from(players);
        console.log(team5);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects

    // and think we make a copy:

    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

