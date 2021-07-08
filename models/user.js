const path = require('path');
const db = require('../database');

module.exports = class user {
    constructor(iduser, name, email, password, admin, image, cpf, birthday, gender, cep, state, city, street, nmr, phone1, phone2) {
        this.iduser = iduser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.image = image;
        this.cpf = cpf;
        this.birthday = birthday;
        this.gender = gender;
        this.cep = cep;
        this.state = state;
        this.city = city;
        this.street = street;
        this.nmr = nmr;
        this.phone1 = phone1;
        this.phone2 = phone2;
    }

    create(cb) {
        db.execute(`INSERT INTO user(name_user, email_user, gender_user, cpf_user, birthday_user, cep_user, state_user, city_user, street_user, nmr_user, phone1_user, phone2_user, image_user, admin_user, password_user)
                    VALUES ("${this.name}","${this.email}","${this.gender}","${this.cpf}","${this.birthday}","${this.cep}","${this.state}","${this.city}","${this.street}","${this.nmr}","${this.phone1}", "${this.phone2}", "${this.image}", 0, "${this.password}");`)
            .then(result => {
                cb(null, result[0].insertId, );
            }).catch(err => {
                cb(err, null);
            });
    }

    select(query, cb) {
        db.execute(query)
            .then(result => {
                console.log(result[0][0]);
                cb(null, result[0][0]);
            })
            .catch(err => { cb(err, null) });
    }

    update(cb) {
        db.execute(`UPDATE user SET name_user = "${this.name}", email_user = "${this.email}", gender_user = "${this.cpf}", cpf_user = "${this.cpf}", birthday_user = "${this.birthday}", cep_user = "${this.cep}", state_user = "${this.state}", city_user = "${this.city}", street_user = "${this.street}", nmr_user = "${this.nmr}", phone1_user = "${this.phone1}", phone2_user = "${this.phone2}", image_user = "${this.image}", admin_user = 0 WHERE iduser = ${this.iduser}`)
            .then(result => {
                cb(null);
            })
            .catch(err => { cb(err) });
    }

    update_password(iduser, password, cb) {
        db.execute(`UPDATE user SET senha = "${password}" WHERE idusuario = ${iduser}`)
            .then(result => {
                cb(null);
            })
            .catch(err => { cb(err) });
    }

    remove(id, cb) {
        db.execute(`DELETE FROM user WHERE iduser = ${id} `)
            .then(result => {
                cb(null);
            })
            .catch(err => { cb(err) });
    }

}