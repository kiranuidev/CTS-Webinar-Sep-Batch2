angular.module("authenticate")
    .service("authenticateSvc", [function () {
        var users = [
            {
                "_id": "57e25b9e087dc9830aa90c9b",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9e5434eb1432a0f56f",
                "username": "Ford",
                "password": "C2000"
  },
            {
                "_id": "57e25b9e1a72064a3dbedf5d",
                "username": "Toyota",
                "password": "C2000"
  },
            {
                "_id": "57e25b9eab3332ee499ac13e",
                "username": "BMW",
                "password": "Fortuner"
  },
            {
                "_id": "57e25b9e806c24b5ce23e463",
                "username": "VolksWagon",
                "password": "Fortuner"
  },
            {
                "_id": "57e25b9eba8a05be8c349616",
                "username": "Mercedez",
                "password": "POLO"
  },
            {
                "_id": "57e25b9e440cea85ba2ecc95",
                "username": "Suzuki",
                "password": "POLO"
  },
            {
                "_id": "57e25b9ee973e7a97882739d",
                "username": "Yamaha",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9e07a199aed503a25a",
                "username": "Mercedez",
                "password": "A5"
  },
            {
                "_id": "57e25b9e8f217129ada80855",
                "username": "Audi",
                "password": "Fortuner"
  },
            {
                "_id": "57e25b9e102933776b3338e7",
                "username": "Ford",
                "password": "c4000"
  },
            {
                "_id": "57e25b9e3ccbf0330e3c20b2",
                "username": "Mercedez",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9e171dcbce0955bd7f",
                "username": "Jaguar",
                "password": "c4000"
  },
            {
                "_id": "57e25b9ef80c8dd6653fd1bf",
                "username": "Audi",
                "password": "Vento"
  },
            {
                "_id": "57e25b9eb1ab432a66014461",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9e5f540d0a188179f3",
                "username": "Audi",
                "password": "POLO"
  },
            {
                "_id": "57e25b9e22c556e56d9843e1",
                "username": "Suzuki",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9ea209b07054dd486e",
                "username": "Toyota",
                "password": "A5"
  },
            {
                "_id": "57e25b9e24204f8fcab1b5c4",
                "username": "Ford",
                "password": "C2000"
  },
            {
                "_id": "57e25b9ed0a35e8c7058ae0e",
                "username": "VolksWagon",
                "password": "POLO"
  },
            {
                "_id": "57e25b9e173ff4278f96d756",
                "username": "Mercedez",
                "password": "c4000"
  },
            {
                "_id": "57e25b9ee9b70990d4d34090",
                "username": "Ford",
                "password": "c4000"
  },
            {
                "_id": "57e25b9e32db0223311c5caf",
                "username": "Jaguar",
                "password": "Vento"
  },
            {
                "_id": "57e25b9eceb637a1cf2fb82c",
                "username": "Audi",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9e719fb09c53623f4a",
                "username": "Ford",
                "password": "A5"
  },
            {
                "_id": "57e25b9ecee5e88675b9e10d",
                "username": "Yamaha",
                "password": "FZ"
  },
            {
                "_id": "57e25b9e09e9c6fa172881ee",
                "username": "Toyota",
                "password": "c4000"
  },
            {
                "_id": "57e25b9e053417a906dbe10e",
                "username": "Yamaha",
                "password": "Vento"
  },
            {
                "_id": "57e25b9e1f9a18b5912823cc",
                "username": "Mercedez",
                "password": "A5"
  },
            {
                "_id": "57e25b9ea4a3a183dcfac0b2",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9ed6af4ac77b6f160c",
                "username": "BMW",
                "password": "C2000"
  },
            {
                "_id": "57e25b9e300cc846f72df6d1",
                "username": "Jaguar",
                "password": "A5"
  },
            {
                "_id": "57e25b9e570b8b79eef93bdf",
                "username": "Mercedez",
                "password": "C2000"
  },
            {
                "_id": "57e25b9e76df2c81ee795221",
                "username": "Yamaha",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9ee1b02154fc66773f",
                "username": "Mercedez",
                "password": "FZ"
  },
            {
                "_id": "57e25b9e6302ae32f0c43922",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9effd9db5cffc70879",
                "username": "VolksWagon",
                "password": "Vento"
  },
            {
                "_id": "57e25b9e700cc7f219c55e0b",
                "username": "Audi",
                "password": "Baleno"
  }
];
        var checkUser = function (loginUser) {
            //logic
            angular.forEach(users, function (user) {
                if (user.username.toLowerCase() == loginUser.username.toLowerCase() &&
                    user.password == loginUser.password) {
                    authenticate.isLoggedIn = true;
                    authenticate.username = user.username;
                    return user;
                }
            });
        };
        var authenticate = {
            isLoggedIn: false,
            username: ""
        };


        var resetUser = function () {
            authenticate.isLoggedIn = false;
            authenticate.username = "";
            return authenticate;
        };
        this.authenticateUser = function (user) {

            checkUser(user);
            return authenticate;
            //check useranem and passwod
            //if matches set the authenticate object 
            //else reset the authenticate object.
        };

        this.logOut = function () {

        };
    }]);
