const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
  isApproved: Boolean,
});

const Person = mongoose.model('Person', PersonSchema);

const createPerson = async (
  nameUser,
  ageUser,
  favoriteFoodsUser,
  isApprovedUser
) => {
  let redaGhafla = new Person({
    name: nameUser,
    age: ageUser,
    favoriteFoods: favoriteFoodsUser,
    isApproved: isApprovedUser,
  });
  await redaGhafla.save((err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });
};

//createPerson('Reda', 55, ['couscous', 'tajine'], true);

const peopleInfo = [
  {
    name: 'Amine',
    age: 23,
    favoriteFoods: ['Salade', 'Pizza'],
    isApproved: true,
  },
  {
    name: 'Rayan Ahmed',
    age: 25,
    favoriteFoods: ['Tacos', 'Pizza'],
    isApproved: false,
  },
  {
    name: 'Kamal Ismail',
    age: 28,
    favoriteFoods: ['Chicken', 'patatos'],
    isApproved: true,
  },
];

const createPeople = (peopleInfo) => {
  Person.create(peopleInfo, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return data;
    }
  });
};

// createPeople(peopleInfo);

const findPeople = (personName) => {
  Person.find({ name: personName }, (err, dataFound) => {
    if (err) {
      console.log(err);
    }
    //console.log(dataFound);
    return dataFound;
  });
};

// findPeople('Amine');

const findFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, foodFound) => {
    if (err) {
      return err;
    }
    console.log(foodFound);
    return foodFound;
  });
};

// findFood(['Salade', 'Pizza']);

const findPersonById = (idPerson) => {
  Person.findById({ _id: idPerson }, (err, dataID) => {
    if (err) {
      return err;
    } else {
      //   console.log(dataID);
      return dataID;
    }
  });
};

// findPersonById('63acd73c22a7c827ddc0d2ef');

const findByIdSave = (personId) => {
  let newFood = 'Tajine';
  Person.findById(personId, (err, data) => {
    if (err) {
      return err;
    }
    //console.log(data.favoriteFoods);
    data.favoriteFoods.push(newFood);
    data.save((err, data) => {
      if (err) {
        return err;
      }
      console.log(data);
      return;
    });
  });
};
// findByIdSave('63acd73c22a7c827ddc0d2f1');

const findAndUpdatePerson = (personName) => {
  Person.findOneAndUpdate(
    { name: personName },
    { $set: { age: 20 } },
    { new: true },
    (err, data) => {
      if (err) {
        return err;
      }
      console.log(data);
      return;
    }
  );
};

// findAndUpdatePerson('Kamal Ismail');

// Remove By Id and Remove a Person
const removePerson = (id) => {
  Person.findByIdAndRemove(id, (err, data) => {
    if (err) {
      return err;
    }
    return data;
  });
};

// callback function done
const removeMany = (done) => {
  let userName = 'Mary';
  Person.remove({ name: userName }, (err, data) => {
    if (err) {
      done(err, data);
    }
    done(null, data);
  });
};

const queryHelpers = (done) => {
  const searchFood = 'burrito';
  Person.find({ name: searchFood })
    .sort()
    .limit(2)
    .select({ age: 0 })
    .exec((err, data) => {
      if (err) {
        return err;
      }
      done(null, data);
    });
};
