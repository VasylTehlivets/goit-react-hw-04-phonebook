import { useState } from "react";
import PropTypes from "prop-types";
import css from "../ContactForm/ContactForm.module.css";

export function ContactForm({ onSubmit }) {
const [name, setName] = useState("");
const [number, setNumber] = useState("");

const handleChange = (e) => {
const { name, value } = e.target;
if (name === "name") {
setName(value);
} else if (name === "number") {
setNumber(value);
}
};

const handleSubmit = (e) => {
e.preventDefault();
onSubmit({ name, number });
setName("");
setNumber("");
};

return (
<form className={css.form} onSubmit={handleSubmit}>
<label className={css.label}>
Name
<input
       className={css.input}
       type="text"
       name="name"
       value={name}
       onChange={handleChange}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
     />
</label>
<label className={css.label}>
Number
<input
       className={css.input}
       type="tel"
       name="number"
       value={number}
       onChange={handleChange}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
     />
</label>
<button className={css.btn} type="submit">
Add contact
</button>
</form>
);
}

ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
};