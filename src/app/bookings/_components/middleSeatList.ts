type SeatType = {
	id: number;
	x_axis: string;
	y_axis: number;
};

const leftFrontSeat: SeatType[] = [];
const rightFrontSeat: SeatType[] = [];
const leftMiddleSeat: SeatType[] = [];
const rightMiddleSeat: SeatType[] = [];
const leftBackSeat: SeatType[] = [];
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

const seatsPerRowFrontRight = 8;
for (let row = 0; row < rowsFront.length; row++) {
	for (let seat = 6; seat <= 13; seat++) {
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

const seatsPerRowMiddleRight = 8;
for (let row = 0; row < rowsMiddle.length; row++) {
	for (let seat = 6; seat <= 13; seat++) {
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

const seatsPerRowBackRight = 8;
for (let row = 0; row < rowsBack.length; row++) {
	for (let seat = 6; seat <= 13; seat++) {
		rightBackSeat.push({
			id: row * seatsPerRowBackRight + seat,
			x_axis: rowsBack[row],
			y_axis: seat,
		});
	}
}

export {
	leftFrontSeat,
	rightFrontSeat,
	leftMiddleSeat,
	rightMiddleSeat,
	leftBackSeat,
	rightBackSeat,
};
