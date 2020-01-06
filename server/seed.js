const fs = require ('fs');
const path = require ('ruta');
const faker = require ('faker');
const md5 = require ('md5');

función createBadges (límite = 5) {
  resultado constante = [];

  for (let i = 0; i <limit; i ++) {
    const firstName = faker.name.firstName ();
    const lastName = faker.name.lastName ();
    correo electrónico const = faker.internet.email ();

    result.push ({
      id: faker.random.uuid (),
      nombre de pila,
      apellido,
      correo electrónico,
      jobTitle: faker.name.jobTitle (),
      twitter: `$ {firstName} $ {lastName} $ {faker.address.zipCode ()}`,
      avatarUrl: `https://www.gravatar.com/avatar/$ {md5 (correo electrónico)}? d = identicon`,
    });
  }

  resultado de retorno;
}

función main () {
  const data = {
    insignias: createBadges (),
  };

  fs.writeFileSync (
    path.resolve (__ dirname, 'db.json'),
    JSON.stringify (datos, nulo, 4)
  );
}

principal();