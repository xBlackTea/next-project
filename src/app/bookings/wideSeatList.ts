type SeatType = {
	id: number;
	x_axis: string;
	y_axis: number;
};

const leftFrontSeat: SeatType[] = [];
const centerFrontSeat: SeatType[] = [];
const rightFrontSeat: SeatType[] = [];
const leftMiddleSeat: SeatType[] = [];
const centerMiddleSeat: SeatType[] = [];
const rightMiddleSeat: SeatType[] = [];
const leftBackSeat: SeatType[] = [];
const centerBackSeat: SeatType[] = [];
const rightBackSeat: SeatType[] = [];

const rowsFront = ['A', 'B', 'C'];
const rowsMiddle = ['D', 'E', 'F', 'G', 'H'];
const rowsBack = ['I', 'J'];

const seatsPerRowFrontLeft = 5;
for (let row = 0; row < rowsFront.length; row++) {
	for (let seat = 1; seat <= seatsPerRowFrontLeft; seat++) {
		leftFrontSeat.push({
			id: row * seatsPerRowFrontLeft + seat,
			x_axis: rowsFront[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowFrontCenter = 12;
for (let row = 0; row < rowsFront.length; row++) {
	for (let seat = 6; seat <= 17; seat++) {
		centerFrontSeat.push({
			id: row * seatsPerRowFrontCenter + (seat - 5),
			x_axis: rowsFront[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowFrontRight = 5;
for (let row = 0; row < rowsFront.length; row++) {
	for (let seat = 18; seat <= 22; seat++) {
		rightFrontSeat.push({
			id: row * seatsPerRowFrontRight + seat,
			x_axis: rowsFront[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowMiddleLeft = 3;
for (let row = 0; row < rowsMiddle.length; row++) {
	for (let seat = 3; seat <= 5; seat++) {
		leftMiddleSeat.push({
			id: row * seatsPerRowMiddleLeft + seat,
			x_axis: rowsMiddle[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowMiddleCenter = 12;
for (let row = 0; row < rowsMiddle.length; row++) {
	for (let seat = 6; seat <= 17; seat++) {
		centerMiddleSeat.push({
			id: row * seatsPerRowMiddleCenter + seat,
			x_axis: rowsMiddle[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowMiddleRight = 3;
for (let row = 0; row < rowsMiddle.length; row++) {
	for (let seat = 18; seat <= 20; seat++) {
		rightMiddleSeat.push({
			id: row * seatsPerRowMiddleRight + seat,
			x_axis: rowsMiddle[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowBackLeft = 5;
for (let row = 0; row < rowsBack.length; row++) {
	for (let seat = 1; seat <= seatsPerRowBackLeft; seat++) {
		leftBackSeat.push({
			id: row * seatsPerRowBackLeft + seat,
			x_axis: rowsBack[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowBackCenter = 12;
for (let row = 0; row < rowsBack.length; row++) {
	for (let seat = 6; seat <= 17; seat++) {
		centerBackSeat.push({
			id: row * seatsPerRowBackCenter + seat,
			x_axis: rowsBack[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowBackRight = 5;
for (let row = 0; row < rowsBack.length; row++) {
	for (let seat = 18; seat <= 22; seat++) {
		rightBackSeat.push({
			id: row * seatsPerRowBackRight + seat,
			x_axis: rowsBack[row],
			y_axis: seat,
		});
	}
}

export {
	leftFrontSeat,
	centerFrontSeat,
	rightFrontSeat,
	leftMiddleSeat,
	centerMiddleSeat,
	rightMiddleSeat,
	leftBackSeat,
	centerBackSeat,
	rightBackSeat,
};
