
const process = require('node:process');
const express = require('express');
const cors = require('cors');

const app = express();


const PARSED_PORT = parseInt(process.argv[2]);
const PORT = isNaN(PARSED_PORT) ? 3000 : PARSED_PORT;

const NOTES = [

	{
		name: "John Smith",
		phone: "02 9988 2211",
		dept: "Information Technology",
		addrStr: "1 Code Lane",
		addrCty: "Javaville",
		addrState: "NSW",
		addrZip: "0100",
		addrCntry: "Australia"
	},
	{
		name: "Sue White",
		phone: "03 8899 2255",
		dept: "Finance",
		addrStr: "16 Bit Way",
		addrCty: "Byte Cove",
		addrState: "QLD",
		addrZip: "1101",
		addrCntry: "Australia"
	},
	{
		name: "Bob O'Bits",
		phone: "05 7788 2255",
		dept: "Marketing",
		addrStr: "8 Silicon Road",
		addrCty: "Cloud Hills",
		addrState: "VIC",
		addrZip: "1001",
		addrCntry: "Australia"
	},
	{
		name: "Mary Blue",
		phone: "06 4455 9988",
		dept: "Finance",
		addrStr: "4 Processor Boulevard",
		addrCty: "Appletson",
		addrState: "NT",
		addrZip: "1010",
		addrCntry: "Australia"
	},
	{
		name: "Mick Green",
		phone: "02 9988 1122",
		dept: "Marketing",
		addrStr: "700 Bandwidth Street",
		addrCty: "Bufferland",
		addrState: "NSW",
		addrZip: "0110",
		addrCntry: "Australia"
	},
	{
		name: "John Smith",
		phone: "02 9988 2211",
		dept: "Information Technology",
		addrStr: "1 Code Lane",
		addrCty: "Javaville",
		addrState: "NSW",
		addrZip: "0100",
		addrCntry: "Australia"
	},
	{
		name: "Sue White",
		phone: "03 8899 2255",
		dept: "Finance",
		addrStr: "16 Bit Way",
		addrCty: "Byte Cove",
		addrState: "QLD",
		addrZip: "1101",
		addrCntry: "Australia"
	},
	{
		name: "Bob O'Bits",
		phone: "05 7788 2255",
		dept: "Marketing",
		addrStr: "8 Silicon Road",
		addrCty: "Cloud Hills",
		addrState: "VIC",
		addrZip: "1001",
		addrCntry: "Australia"
	},
	{
		name: "Mary Blue",
		phone: "06 4455 9988",
		dept: "Finance",
		addrStr: "4 Processor Boulevard",
		addrCty: "Appletson",
		addrState: "NT",
		addrZip: "1010",
		addrCntry: "Australia"
	},
	{
		name: "Mick Green",
		phone: "02 9988 1122",
		dept: "Marketing",
		addrStr: "700 Bandwidth Street",
		addrCty: "Bufferland",
		addrState: "NSW",
		addrZip: "0110",
		addrCntry: "Australia"
	},
	{
		name: "John Smith",
		phone: "02 9988 2211",
		dept: "Information Technology",
		addrStr: "1 Code Lane",
		addrCty: "Javaville",
		addrState: "NSW",
		addrZip: "0100",
		addrCntry: "Australia"
	},
	{
		name: "Sue White",
		phone: "03 8899 2255",
		dept: "Finance",
		addrStr: "16 Bit Way",
		addrCty: "Byte Cove",
		addrState: "QLD",
		addrZip: "1101",
		addrCntry: "Australia"
	},
	{
		name: "Bob O'Bits",
		phone: "05 7788 2255",
		dept: "Marketing",
		addrStr: "8 Silicon Road",
		addrCty: "Cloud Hills",
		addrState: "VIC",
		addrZip: "1001",
		addrCntry: "Australia"
	},
	{
		name: "Mary Blue",
		phone: "06 4455 9988",
		dept: "Finance",
		addrStr: "4 Processor Boulevard",
		addrCty: "Appletson",
		addrState: "NT",
		addrZip: "1010",
		addrCntry: "Australia"
	},
	{
		name: "Mick Green",
		phone: "02 9988 1122",
		dept: "Marketing",
		addrStr: "700 Bandwidth Street",
		addrCty: "Bufferland",
		addrState: "NSW",
		addrZip: "0110",
		addrCntry: "Australia"
	},
];

const ERR_MSG = (msg) => { return { reason: msg }; };

app.use(express.json());
app.use(cors());

app.get('/contacts', (req, res) => {
	res.send(NOTES);
});


app.get('/contact/:contactid', (req, res) => {
	let contactid = parseInt(req.params.contactid);

	if(isNaN(contactid)) {
		res.status(400).send(ERR_MSG("contactid is not a nunber"))
	} else {
		if(contactid < 0 || contactid >= NOTES.length) {
			res.status(400).send(ERR_MSG("contactid is not within range"))
		} else {
			res.status(200).send(
				NOTES[contactid]
			);
		}
	}
});


app.post('/contact', (req, res) => {
	let contact = req.body;

	if(contact.name !== undefined &&
		contact.phone !== undefined&&
		contact.dept !== undefined&&
		contact.addrStr !== undefined&&
		contact.addrCty !== undefined&&
		contact.addrState !== undefined&&
		contact.addrZip !== undefined&&
		contact.addrCntry !== undefined) {
		NOTES.push(
			{
				name: contact.name,
				phone: contact.phone,
				addrStr: contact.addrStr,
				dept: contact.dept,
				addrCty: contact.addrCty,
				addrState: contact.addrState,
				addrZip: contact.addrZip,
				addrCntry: contact.addrCntry,
			});
		res.status(200).send({ reason: "Success, contact added" });
	} else {
		res.status(400).send(ERR_MSG("Unable to add contact, missing fields"));
	}
});

app.put('/contact/:contactid', (req, res) => {
	let contactid = parseInt(req.params.contactid);
	if(isNaN(contactid)) {
		res.status(400).send(ERR_MSG("contactid is not a number"));
	} else {
		if(contactid < 0 || contactid >= NOTES.length) {
			res.status(400).send(ERR_MSG("contact id is not within range"))
		} else {
			let contact = req.body;

			if(contact.name !== undefined &&
				contact.phone !== undefined&&
				contact.dept !== undefined&&
				contact.addrStr !== undefined&&
				contact.addrCty !== undefined&&
				contact.addrState !== undefined&&
				contact.addrZip !== undefined&&
				contact.addrCntry !== undefined) {
				NOTES[contactid] = {
					name: contact.name,
					phone: contact.phone,
					addrStr: contact.addrStr,
					dept: contact.dept,
					addrCty: contact.addrCty,
					addrState: contact.addrState,
					addrZip: contact.addrZip,
					addrCntry: contact.addrCntry,
					};
				res.status(200).send({ reason: "Success, contact updated" });
			} else {
				res.status(400)
					.send(ERR_MSG("Unable to update contact, missing fields"));
			}
		}
	}

});


app.delete('/contact/:contactid', (req, res) => {
	let contactid = parseInt(req.params.contactid);

	if(isNaN(contactid)) {
		res.status(400).send(ERR_MSG("contactid is not a number"));
	} else {
		if(contactid < 0 || contactid >= NOTES.length) {
			res.status(400).send(ERR_MSG("contact id is not within range"))
		} else {
			NOTES.splice(contactid, 1);
			res.status(200).send({ reason: "Success, contact removed" });
		}
	}
});


app.listen(PORT, () => {
	console.log('Contact List API Has Started');
});
