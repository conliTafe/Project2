
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

app.get('/notes', (req, res) => {
	res.send(NOTES);
});


app.get('/note/:noteid', (req, res) => {
	let noteid = parseInt(req.params.noteid);

	if(isNaN(noteid)) {
		res.status(400).send(ERR_MSG("noteid is not a nunber"))
	} else {
		if(noteid < 0 || noteid >= NOTES.length) {
			res.status(400).send(ERR_MSG("noteid is not within range"))
		} else {
			res.status(200).send(
				NOTES[noteid]
			);
		}
	}
});


app.post('/note', (req, res) => {
	let note = req.body;

	if(note.name !== undefined &&
		note.phone !== undefined&&
		note.dept !== undefined&&
		note.addrStr !== undefined&&
		note.addrCty !== undefined&&
		note.addrState !== undefined&&
		note.addrZip !== undefined&&
		note.addrCntry !== undefined) {
		NOTES.push(
			{
				name: note.name,
				phone: note.phone,
				addrStr: note.addrStr,
				dept: note.dept,
				addrCty: note.addrCty,
				addrState: note.addrState,
				addrZip: note.addrZip,
				addrCntry: note.addrCntry,
			});
		res.status(200).send({ reason: "Success, note added" });
	} else {
		res.status(400).send(ERR_MSG("Unable to add note, missing fields"));
	}
});

app.put('/note/:noteid', (req, res) => {
	let noteid = parseInt(req.params.noteid);
	if(isNaN(noteid)) {
		res.status(400).send(ERR_MSG("noteid is not a number"));
	} else {
		if(noteid < 0 || noteid >= NOTES.length) {
			res.status(400).send(ERR_MSG("note id is not within range"))
		} else {
			let note = req.body;

			if(note.name !== undefined &&
				note.phone !== undefined&&
				note.dept !== undefined&&
				note.addrStr !== undefined&&
				note.addrCty !== undefined&&
				note.addrState !== undefined&&
				note.addrZip !== undefined&&
				note.addrCntry !== undefined) {
				NOTES[noteid] = {
					name: note.name,
					phone: note.phone,
					addrStr: note.addrStr,
					dept: note.dept,
					addrCty: note.addrCty,
					addrState: note.addrState,
					addrZip: note.addrZip,
					addrCntry: note.addrCntry,
					};
				res.status(200).send({ reason: "Success, note updated" });
			} else {
				res.status(400)
					.send(ERR_MSG("Unable to update note, missing fields"));
			}
		}
	}

});


app.delete('/note/:noteid', (req, res) => {
	let noteid = parseInt(req.params.noteid);

	if(isNaN(noteid)) {
		res.status(400).send(ERR_MSG("noteid is not a number"));
	} else {
		if(noteid < 0 || noteid >= NOTES.length) {
			res.status(400).send(ERR_MSG("note id is not within range"))
		} else {
			NOTES.splice(noteid, 1);
			res.status(200).send({ reason: "Success, note removed" });
		}
	}
});


app.listen(PORT, () => {
	console.log('Notebook API Has Started');
});
