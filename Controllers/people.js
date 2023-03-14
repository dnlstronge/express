



const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "please enter a valid name" });
    } else {
      res.status(201).json({ success: true, person: name, msg: "SUCCESS" });
    }
  }
const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (name) {
      return res
        .status(201)
        .json({ success: true, data: [...people, { id: 4, name: name }] });
    } else {
      return res
        .status(401)
        .json({ succes: false, msg: "Error: please enter a name" });
    }
  }

  const updatePerson =  (req, res) => {
    const { id } = req.params; // id specified from browser
    const { name } = req.body; // body - what you want to change to
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
      res
      .status(404)
      .json({success: false, msg: `id: ${id} does not exist`});
    }
    const newPeople = people.map((person) => {
      if(person.id === Number(id)) {
        person.name = name
      }
      return person;
    })
    res.status(200).json({success: true, data: newPeople})
  }

  const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
      res
      .status(404)
      .json({success: false, msg: `id: ${req.params.id} does not exist`})
    }
    const newPeople = people.filter(person => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
  }

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}