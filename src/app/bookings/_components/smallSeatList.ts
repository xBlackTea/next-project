type SeatType = {
	id: number;
	x_axis: string;
	y_axis: number;
};

const leftFrontSeat: SeatType[] = [];
const rightFrontSeat: SeatType[] = [];
const leftBackSeat: SeatType[] = [];
const rightBackSeat: SeatType[] = [];

const rowsFront = ['A', 'B'];
const rowsBack = ['C', 'D', 'E', 'F', 'G'];

const seatsPerRowFrontLeft = 2;
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
	for (let seat = 3; seat <= 10; seat++) {
		rightFrontSeat.push({
			id: row * seatsPerRowFrontRight + seat,
			x_axis: rowsFront[row],
			y_axis: seat,
		});
	}
}

const seatsPerRowBackLeft = 2;
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
	for (let seat = 3; seat <= 10; seat++) {
		rightBackSeat.push({
			id: row * seatsPerRowBackRight + seat,
			x_axis: rowsBack[row],
			y_axis: seat,
		});
	}
}

export { leftFrontSeat, rightFrontSeat, leftBackSeat, rightBackSeat };
