let altitude;
let fuel_percentage;
let vertical_speed;
let compass;
let airspeed;
let latitude;
let longitude;

let nav1_active;
let nav1_standby;
let nav2_active;
let nav2_standby;

let adf_stby_1000;
let adf_stby_100;
let adf_stby_10;
let adf_stby_1;

let adf_use_1000;
let adf_use_100;
let adf_use_10;
let adf_use_1;

let adf_card_deg
let nav1_obs_deg
let nav2_obs_deg

let nav1_g3000_freq
let nav2_g3000_freq
let adf_g3000_freq

let com1_active;
let com1_standby;
let com2_active;
let com2_standby;

let xpndr_1000;
let xpndr_100;
let xpndr_10;
let xpndr_1;

let xpndr_g3000;
let com1_g3000_freq;
let com2_g3000_freq;

let com1_transmit
let com2_transmit

let autopilot_master;
let autopilot_nav1_lock;
let autopilot_wing_leveler;
let autopilot_heading_lock;
let autopilot_heading_lock_dir;
let autopilot_altitude_lock;
let autopilot_altitude_lock_var;
let autopilot_attitude_hold;
let autopilot_autothrottle;
let autopilot_glideslope_hold;
let autopilot_approach_hold;
let autopilot_backcourse_hold;
let autopilot_vertical_hold;
let autopilot_vertical_hold_var;
let autopilot_pitch_hold;
let autopilot_pitch_hold_ref;
let autopilot_flight_director_active;
let autopilot_airspeed_hold;
let autopilot_airspeed_hold_var;

let gear_handle_position;
let elevator_trim_pct;
let elevator_trim_pct_reversed;
let rudder_trim_pct;
let flaps_handle_pct;
let flaps_handle_pct_reversed;

let cabin_seatbelts_alert_switch;
let cabin_no_smoking_alert_switch;

// Maps Size Fix Function
let map_size_fix;
let map_size_fix_mod
map_size_fix = 0;

function mapRefreshFix() {
	map_size_fix = map_size_fix + 1;
	map_size_fix_mod = map_size_fix % 2;
	
	if (map_size_fix_mod = 0) {
		$('#map_row').height('+=1');
	} else {
		$('#map_row').height('-=1');
	};
	
	map_size_fix = map_size_fix * 1;
}

// Display Radio (Navigation) Data
function displayRadio() {
	$("#nav1_active").text(nav1_active);
	$("#nav1_standby").text(nav1_standby);
	$("#nav2_active").text(nav2_active);
	$("#nav2_standby").text(nav2_standby);
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
	$("#adf_stby_10").text(adf_stby_10);
	$("#adf_stby_1").text(adf_stby_1);
	$("#adf_act_1000").text(adf_use_1000);
	$("#adf_act_100").text(adf_use_100);
	$("#adf_act_10").text(adf_use_10);
	$("#adf_act_1").text(adf_use_1);
	$("#ADF_heading").attr('placeholder', adf_card_deg);
	$("#OBS_1_heading").attr('placeholder', nav1_obs_deg);
	$("#OBS_2_heading").attr('placeholder', nav2_obs_deg);
	$("#com1_active").text(com1_active);
	$("#com1_standby").text(com1_standby);
	$("#com2_active").text(com2_active);
	$("#com2_standby").text(com2_standby);
	$("#xpndr_1000").text(xpndr_1000);
	$("#xpndr_100").text(xpndr_100);
	$("#xpndr_10").text(xpndr_10);
	$("#xpndr_1").text(xpndr_1);
}

// Sync Radio/Navigation variables
function syncRadio() {
	$.getJSON($SCRIPT_ROOT + '/ui', {}, function(data) {
		nav1_active = Number(data.NAV1_ACTIVE).toFixed(2);
		nav1_standby = Number(data.NAV1_STANDBY).toFixed(2);
		nav2_active = Number(data.NAV2_ACTIVE).toFixed(2);
		nav2_standby = Number(data.NAV2_STANDBY).toFixed(2);
		adf_stby_1000 = Number(data.ADF_STBY_1000);
		adf_stby_100 = Number(data.ADF_STBY_100);
		adf_stby_10 = Number(data.ADF_STBY_10);
		adf_stby_1 = Number(data.ADF_STBY_1);
		adf_use_1000 = Number(data.ADF_USE_1000);
		adf_use_100 = Number(data.ADF_USE_100);
		adf_use_10 = Number(data.ADF_USE_10);
		adf_use_1 = Number(data.ADF_USE_1);
		adf_card_deg = Number(data.ADF_CARD_DEG);
		nav1_obs_deg = Number(data.NAV1_OBS_DEG);
		nav2_obs_deg = Number(data.NAV2_OBS_DEG);
		com1_active = Number(data.COM1_ACTIVE).toFixed(3);
		com1_standby = Number(data.COM1_STANDBY).toFixed(3);
		com2_active = Number(data.COM2_ACTIVE).toFixed(3);
		com2_standby = Number(data.COM2_STANDBY).toFixed(3);
		xpndr_1000 = Number(data.XPNDR_1000);
		xpndr_100 = Number(data.XPNDR_100);
		xpndr_10 = Number(data.XPNDR_10);
		xpndr_1 = Number(data.XPNDR_1);
    });
	setInterval(function() {
		displayRadio();
	}, 500);
}

window.setInterval(function(){
    getSimulatorData();
    displayData();
    updateMap();
}, 200);

function xpndrplus1() {
	// xpndr plus 1
	xpndr_1 = xpndr_1 + 1;
	if (xpndr_1 > 7) {
		xpndr_1 = 0;
	}
	$("#xpndr_1").text(xpndr_1);
}

function xpndrminus1() {
	// xpndr minus 1
	xpndr_1 = xpndr_1 - 1;
	if (xpndr_1 < 0) {
		xpndr_1 = 7;
	}
	$("#xpndr_1").text(xpndr_1);
}

function xpndrplus10() {
	// xpndr plus 10
	xpndr_10 = xpndr_10 + 1;
	if (xpndr_10 > 7) {
		xpndr_10 = 0;
	}
	$("#xpndr_10").text(xpndr_10);
}

function xpndrminus10() {
	// xpndr minus 10
	xpndr_10 = xpndr_10 - 1;
	if (xpndr_10 < 0) {
		xpndr_10 = 7;
	}
	$("#xpndr_10").text(xpndr_10);
}

function xpndrplus100() {
	// xpndr plus 100
	xpndr_100 = xpndr_100 + 1;
	if (xpndr_100 > 7) {
		xpndr_100 = 0;
	}
	$("#xpndr_100").text(xpndr_100);
}

function xpndrminus100() {
	// xpndr minus 100
	xpndr_100 = xpndr_100 - 1;
	if (xpndr_100 < 0) {
		xpndr_100 = 7;
	}
	$("#xpndr_100").text(xpndr_100);
}

function xpndrplus1000() {
	// xpndr plus 1000
	xpndr_1000 = xpndr_1000 + 1;
	if (xpndr_1000 > 7) {
		xpndr_1000 = 0;
	}
	$("#xpndr_1000").text(xpndr_1000);
}

function xpndrminus1000() {
	// xpndr minus 1000
	xpndr_1000 = xpndr_1000 - 1;
	if (xpndr_1000 < 0) {
		xpndr_1000 = 7;
	}
	$("#xpndr_1000").text(xpndr_1000);
}

function adfplus1() {
	// ADF plus 1 kHz
	adf_stby_1 = adf_stby_1 + 1;
	if (adf_stby_1 > 9) {
		adf_stby_1 = 0;
	}
	$("#adf_stby_1").text(adf_stby_1);
}

function adfminus1() {
	// ADF minus 1 kHz
	adf_stby_1 = adf_stby_1 - 1;
	if (adf_stby_1 < 0) {
		adf_stby_1 = 9;
	}
	$("#adf_stby_1").text(adf_stby_1);
}

function adfplus10() {
	// ADF plus 10 kHz
	adf_stby_10 = adf_stby_10 + 1;
	if (adf_stby_10 > 9) {
		adf_stby_10 = 0;
	}
	$("#adf_stby_10").text(adf_stby_10);
}

function adfminus10() {
	// ADF minus 10 kHz
	adf_stby_10 = adf_stby_10 - 1;
	if (adf_stby_10 < 0) {
		adf_stby_10 = 9;
	}
	$("#adf_stby_10").text(adf_stby_10);
}

function adfplus100() {
	// ADF plus 100 kHz
	
	if (adf_stby_1000 == 0) {
		adf_stby_100 = adf_stby_100 + 1;
		if (adf_stby_100 > 9) {
			adf_stby_100 = 0;
			adf_stby_1000 = 1;
		}
	} else {
		adf_stby_100 = adf_stby_100 + 1;
		if (adf_stby_100 > 7) {
			adf_stby_100 = 1;
			adf_stby_1000 = 0;
		}
	}
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
}

function adfminus100() {
	// ADF minus 100 kHz
	if (adf_stby_1000 == 0) {
		adf_stby_100 = adf_stby_100 - 1;
		if (adf_stby_100 < 1) {
			adf_stby_100 = 7;
			adf_stby_1000 = 1;
		}
	} else {
		adf_stby_100 = adf_stby_100 - 1;
		if (adf_stby_100 < 0) {
			adf_stby_100 = 9;
			adf_stby_1000 = 0;
		}
	}
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
}

function adfswitch() {
	let dummy_adf_stby_1000 = adf_stby_1000;
	let dummy_adf_stby_100 = adf_stby_100;
	let dummy_adf_stby_10 = adf_stby_10;
	let dummy_adf_stby_1 = adf_stby_1;
	adf_stby_1000 = adf_use_1000;
	adf_stby_100 = adf_use_100;
	adf_stby_10 = adf_use_10;
	adf_stby_1 = adf_use_1;
	adf_use_1000 = dummy_adf_stby_1000;
	adf_use_100 = dummy_adf_stby_100;
	adf_use_10 = dummy_adf_stby_10;
	adf_use_1 = dummy_adf_stby_1;
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
	$("#adf_stby_10").text(adf_stby_10);
	$("#adf_stby_1").text(adf_stby_1);
	$("#adf_act_1000").text(adf_use_1000);
	$("#adf_act_100").text(adf_use_100);
	$("#adf_act_10").text(adf_use_10);
	$("#adf_act_1").text(adf_use_1);
}

function com1minus1() {
	// COM 1 minus 1 MHz
	com1_standby = Number(com1_standby) - 1;
	if (com1_standby < 118) {
		com1_standby = com1_standby + 19
	};
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1plus1() {
	// COM 1 plus 1 MHz
	com1_standby = Number(com1_standby) + 1;
	if (com1_standby > 137) {
		com1_standby = com1_standby - 19
	};
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1minus005() {
	// COM 1 minus 0.005 MHz
	let com1_standby_floor = Math.floor(com1_standby);
	let com1_standby_decimal = com1_standby - com1_standby_floor;
	com1_standby_decimal = com1_standby_decimal.toFixed(3)
	com1_standby_decimal = Number(com1_standby_decimal) - 0.005;
	let com1_standby_decimalx10 = (com1_standby_decimal * 10) - Math.floor(com1_standby_decimal * 10);
	com1_standby_decimalx10 = com1_standby_decimalx10.toFixed(2);
	if (com1_standby_decimalx10 == 0.95 || com1_standby_decimalx10 == 0.70 || com1_standby_decimalx10 == 0.45 || com1_standby_decimalx10 == 0.20) {
		com1_standby_decimal = com1_standby_decimal - 0.005;
	};
	if (com1_standby_decimal < 0) {
		com1_standby_decimal = 0.990
	};
	com1_standby = com1_standby_floor + com1_standby_decimal;
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1plus005() {
	// COM 1 plus 0.005 MHz
	let com1_standby_floor = Math.floor(com1_standby);
	let com1_standby_decimal = com1_standby - com1_standby_floor;
	com1_standby_decimal = com1_standby_decimal.toFixed(3)
	com1_standby_decimal = Number(com1_standby_decimal) + 0.005;
	let com1_standby_decimalx10 = (com1_standby_decimal * 10) - Math.floor(com1_standby_decimal * 10);
	com1_standby_decimalx10 = com1_standby_decimalx10.toFixed(2);
	if (com1_standby_decimalx10 == 0.95 || com1_standby_decimalx10 == 0.70 || com1_standby_decimalx10 == 0.45 || com1_standby_decimalx10 == 0.20) {
		com1_standby_decimal = com1_standby_decimal + 0.005;
	};
	if (com1_standby_decimal >= 1) {
		com1_standby_decimal = 0.0
	};
	com1_standby = com1_standby_floor + com1_standby_decimal;
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1switch() {
	let dummy_com1 = Number(com1_standby);
	com1_standby = Number(com1_active);
	com1_active = Number(dummy_com1);
	com1_standby = com1_standby.toFixed(3);
	com1_active = com1_active.toFixed(3);
	$("#com1_active").text(com1_active);
	$("#com1_standby").text(com1_standby);
}

function com2minus1() {
	// COM 2 minus 1 MHz
	com2_standby = Number(com2_standby) - 1;
	if (com2_standby < 118) {
		com2_standby = com2_standby + 19
	};
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2plus1() {
	// COM 2 plus 1 MHz
	com2_standby = Number(com2_standby) + 1;
	if (com2_standby > 137) {
		com2_standby = com2_standby - 19
	};
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2minus005() {
	// COM 2 minus 0.005 MHz
	let com2_standby_floor = Math.floor(com2_standby);
	let com2_standby_decimal = com2_standby - com2_standby_floor;
	com2_standby_decimal = com2_standby_decimal.toFixed(3)
	com2_standby_decimal = Number(com2_standby_decimal) - 0.005;
	let com2_standby_decimalx10 = (com2_standby_decimal * 10) - Math.floor(com2_standby_decimal * 10);
	com2_standby_decimalx10 = com2_standby_decimalx10.toFixed(2);
	if (com2_standby_decimalx10 == 0.95 || com2_standby_decimalx10 == 0.70 || com2_standby_decimalx10 == 0.45 || com2_standby_decimalx10 == 0.20) {
		com2_standby_decimal = com2_standby_decimal - 0.005;
	};
	if (com2_standby_decimal < 0) {
		com2_standby_decimal = 0.990
	};
	com2_standby = com2_standby_floor + com2_standby_decimal;
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2plus005() {
	// COM 2 plus 0.005 MHz
	let com2_standby_floor = Math.floor(com2_standby);
	let com2_standby_decimal = com2_standby - com2_standby_floor;
	com2_standby_decimal = com2_standby_decimal.toFixed(3)
	com2_standby_decimal = Number(com2_standby_decimal) + 0.005;
	let com2_standby_decimalx10 = (com2_standby_decimal * 10) - Math.floor(com2_standby_decimal * 10);
	com2_standby_decimalx10 = com2_standby_decimalx10.toFixed(2);
	if (com2_standby_decimalx10 == 0.95 || com2_standby_decimalx10 == 0.70 || com2_standby_decimalx10 == 0.45 || com2_standby_decimalx10 == 0.20) {
		com2_standby_decimal = com2_standby_decimal + 0.005;
	};
	if (com2_standby_decimal >= 1) {
		com2_standby_decimal = 0.0
	};
	com2_standby = com2_standby_floor + com2_standby_decimal;
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2switch() {
	let dummy_com2 = Number(com2_standby);
	com2_standby = Number(com2_active);
	com2_active = Number(dummy_com2);
	com2_standby = com2_standby.toFixed(3);
	com2_active = com2_active.toFixed(3);
	$("#com2_active").text(com2_active);
	$("#com2_standby").text(com2_standby);
}

function nav1minus1() {
	// NAV 1 minus 1 MHz
	nav1_standby = Number(nav1_standby) - 1;
	if (nav1_standby < 108) {
		nav1_standby = nav1_standby + 10
	};
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1plus1() {
	// NAV 1 minus 1 MHz
	nav1_standby = Number(nav1_standby) + 1;
	if (nav1_standby > 118) {
		nav1_standby = nav1_standby - 10
	};
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1minus005() {
	// NAV 1 minus 0.05 MHz
	let nav1_standby_floor = Math.floor(nav1_standby);
	let nav1_standby_decimal = nav1_standby - nav1_standby_floor;
	nav1_standby_decimal = nav1_standby_decimal.toFixed(2);
	nav1_standby_decimal = Number(nav1_standby_decimal) - 0.05;
	if (nav1_standby_decimal < 0) {
		nav1_standby_decimal = 0.95
	};
	nav1_standby = nav1_standby_floor + nav1_standby_decimal;
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1plus005() {
	// NAV 1 plus 0.05 MHz
	let nav1_standby_floor = Math.floor(nav1_standby);
	let nav1_standby_decimal = nav1_standby - nav1_standby_floor;
	nav1_standby_decimal = nav1_standby_decimal.toFixed(2);
	nav1_standby_decimal = Number(nav1_standby_decimal) + 0.05;
	if (nav1_standby_decimal >= 1) {
		nav1_standby_decimal = 0.0
	};
	nav1_standby = nav1_standby_floor + nav1_standby_decimal;
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1switch() {
	let dummy_nav1 = Number(nav1_standby);
	nav1_standby = Number(nav1_active);
	nav1_active = Number(dummy_nav1);
	nav1_standby = Number(nav1_standby).toFixed(2);
	nav1_active = Number(nav1_active).toFixed(2);
	$("#nav1_active").text(nav1_active);
	$("#nav1_standby").text(nav1_standby);
}

function nav2minus1() {
	// NAV 2 minus 1 MHz
	nav2_standby = Number(nav2_standby) - 1;
	if (nav2_standby < 108) {
		nav2_standby = nav2_standby + 10
	};
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2plus1() {
	// NAV 2 plus 1 MHz
	nav2_standby = Number(nav2_standby) + 1;
	if (nav2_standby > 118) {
		nav2_standby = nav2_standby - 10
	};
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2minus005() {
	// NAV 2 minus 0.05 MHz
	let nav2_standby_floor = Math.floor(nav2_standby);
	let nav2_standby_decimal = nav2_standby - nav2_standby_floor;
	nav2_standby_decimal = nav2_standby_decimal.toFixed(2);
	nav2_standby_decimal = Number(nav2_standby_decimal) - 0.05;
	if (nav2_standby_decimal < 0) {
		nav2_standby_decimal = 0.95
	};
	nav2_standby = nav2_standby_floor + nav2_standby_decimal;
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2plus005() {
	// NAV 2 plus 0.05 MHz
	let nav2_standby_floor = Math.floor(nav2_standby);
	let nav2_standby_decimal = nav2_standby - nav2_standby_floor;
	nav2_standby_decimal = nav2_standby_decimal.toFixed(2);
	nav2_standby_decimal = Number(nav2_standby_decimal) + 0.05;
	if (nav2_standby_decimal >= 1) {
		nav2_standby_decimal = 0.0
	};
	nav2_standby = nav2_standby_floor + nav2_standby_decimal;
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2switch() {
	let dummy_nav2 = nav2_standby;
	nav2_standby = nav2_active;
	nav2_active = dummy_nav2;
	nav2_standby = Number(nav2_standby).toFixed(2);
	nav2_active = Number(nav2_active).toFixed(2);
	$("#nav2_active").text(nav2_active);
	$("#nav2_standby").text(nav2_standby);
}

// Get rest of sim data which needs to be updated regularly 
function getSimulatorData() {
    $.getJSON($SCRIPT_ROOT + '/ui', {}, function(data) {

        //Navigation
        compass = data.MAGNETIC_COMPASS + data.MAGVAR;
        latitude = data.LATITUDE;
        longitude = data.LONGITUDE;
		
        //Autopilot
        autopilot_master = data.AUTOPILOT_MASTER;
        autopilot_nav1_lock = data.AUTOPILOT_NAV1_LOCK;
        autopilot_wing_leveler = data.AUTOPILOT_WING_LEVELER;
        autopilot_heading_lock = data.AUTOPILOT_HEADING_LOCK;
        autopilot_heading_lock_dir = data.AUTOPILOT_HEADING_LOCK_DIR;
        autopilot_altitude_lock = data.AUTOPILOT_ALTITUDE_LOCK;
        autopilot_altitude_lock_var = data.AUTOPILOT_ALTITUDE_LOCK_VAR;
        autopilot_attitude_hold = data.AUTOPILOT_ATTITUDE_HOLD;
        autopilot_autothrottle = data.AUTOPILOT_AUTOTHROTTLE;
        autopilot_glideslope_hold = data.AUTOPILOT_GLIDESLOPE_HOLD;
        autopilot_approach_hold = data.AUTOPILOT_APPROACH_HOLD;
        autopilot_backcourse_hold = data.AUTOPILOT_BACKCOURSE_HOLD;
        autopilot_vertical_hold = data.AUTOPILOT_VERTICAL_HOLD
        autopilot_vertical_hold_var = data.AUTOPILOT_VERTICAL_HOLD_VAR;
        autopilot_pitch_hold = data.AUTOPILOT_PITCH_HOLD;
        autopilot_pitch_hold_ref = data.AUTOPILOT_PITCH_HOLD_REF;
        autopilot_flight_director_active = data.AUTOPILOT_FLIGHT_DIRECTOR_ACTIVE;
        autopilot_airspeed_hold = data.AUTOPILOT_AIRSPEED_HOLD;
        autopilot_airspeed_hold_var = data.AUTOPILOT_AIRSPEED_HOLD_VAR;
		
		//NAV
		nav1_obs_deg = Number(data.NAV1_OBS_DEG);
		nav2_obs_deg = Number(data.NAV2_OBS_DEG);
		adf_card_deg = Number(data.ADF_CARD_DEG);
		nav1_g3000_freq = Number(data.NAV1_ACTIVE).toFixed(2);
		nav2_g3000_freq = Number(data.NAV2_ACTIVE).toFixed(2);
		adf_g3000_freq = Number(data.ADF_USE);
		
		//COM
		com1_g3000_freq = Number(data.COM1_ACTIVE).toFixed(3);
		com2_g3000_freq = Number(data.COM2_ACTIVE).toFixed(3);
		xpndr_g3000 = data.XPNDR;
		com1_transmit = data.COM1_TRANSMIT;
		com2_transmit = data.COM2_TRANSMIT;
		
		//Altitude
		altitude = data.INDICATED_ALTITUDE;
    });
    return false;
}

// Display sim data which needs to be updated regularly 
function displayData() {
    //Autopilot
    checkAndUpdateButton("#autopilot-master", autopilot_master, "Engaged", "Disengaged");
    checkAndUpdateButton("#autopilot-wing-leveler", autopilot_wing_leveler);
    checkAndUpdateButton("#autopilot-nav1-lock", autopilot_nav1_lock);
    checkAndUpdateButton("#autopilot-heading-lock", autopilot_heading_lock);
    checkAndUpdateButton("#autopilot-altitude-lock", autopilot_altitude_lock);
    checkAndUpdateButton("#autopilot-airspeed-hold", autopilot_airspeed_hold);
    checkAndUpdateButton("#autopilot-attitude-hold", autopilot_attitude_hold);
    checkAndUpdateButton("#autopilot-backcourse-hold", autopilot_backcourse_hold);
    checkAndUpdateButton("#autopilot-approach-hold", autopilot_approach_hold);
    checkAndUpdateButton("#autopilot-vertical-hold", autopilot_vertical_hold);
    checkAndUpdateButton("#autopilot-autothrottle", autopilot_autothrottle);
    checkAndUpdateButton("#autopilot-glideslope-hold", autopilot_glideslope_hold);
    checkAndUpdateButton("#com1-transmit", com1_transmit, "COM 1", "COM 1");
    checkAndUpdateButton("#com2-transmit", com2_transmit, "COM 2", "COM 2");
    checkAndUpdateButton("#com1-transmit-direct", com1_transmit, "Transmit COM 1", "Transmit COM 1");
    checkAndUpdateButton("#com2-transmit-direct", com2_transmit, "Transmit COM 2", "Transmit COM 2");

    $("#autopilot-heading-lock-dir").attr('placeholder', autopilot_heading_lock_dir);
    $("#autopilot-altitude-lock-var").attr('placeholder', autopilot_altitude_lock_var);
    $("#autopilot-airspeed-hold-var").attr('placeholder', autopilot_airspeed_hold_var);
    $("#autopilot-vertical-hold-var").attr('placeholder', autopilot_vertical_hold_var);
	
	//NAV Swap
	$("#ADF_heading").attr('placeholder', adf_card_deg);
	$("#OBS_1_heading").attr('placeholder', nav1_obs_deg);
	$("#OBS_2_heading").attr('placeholder', nav2_obs_deg);
	
	//NAV Direct
	$("#NAV1_freq").attr('placeholder', nav1_g3000_freq);
	$("#OBS1_G3_heading").attr('placeholder', nav1_obs_deg);
	$("#NAV2_freq").attr('placeholder', nav2_g3000_freq);
	$("#OBS2_G3_heading").attr('placeholder', nav2_obs_deg);
	$("#ADF_freq").attr('placeholder', adf_g3000_freq);
	$("#ADF_direct_heading").attr('placeholder', adf_card_deg);
	
	//COM Direct
	$("#COM1_freq").attr('placeholder', com1_g3000_freq);
	$("#COM2_freq").attr('placeholder', com2_g3000_freq);
	$("#XPNDR_g3000").attr('placeholder', xpndr_g3000);
	
}

function checkAndUpdateButton(buttonName, variableToCheck, onText="On", offText="Off") {
    if (variableToCheck === 1) {
        $(buttonName).removeClass("btn-danger").addClass("btn-success").html(onText);
    } else {
        $(buttonName).removeClass("btn-success").addClass("btn-danger").html(offText);
    }
}

function toggleFollowPlane() {
    followPlane = !followPlane;
    if (followPlane === true) {
        $("#followMode").text("Unfollow plane")
        $("#followModeButton").removeClass("btn-danger").addClass("btn-primary")
    }
    if (followPlane === false) {
        $("#followMode").text("Follow plane")
        $("#followModeButton").removeClass("btn-primary").addClass("btn-danger")
    }
}

function updateMap() {
    var pos = L.latLng(latitude, longitude);

    marker.slideTo(	pos, {
        duration: 200,
    });
    marker.setRotationAngle(compass);

    if (followPlane === true) {
        map.panTo(pos);
    }
}

function refreshMapSize() {
	setInterval(function () {
	map.invalidateSize();
	}, 1000);
}

function setSimDatapoint(datapointToSet, valueToUse) {
    url_to_call = "/datapoint/"+datapointToSet+"/set";
    $.post( url_to_call, { value_to_use: valueToUse } );
}

function triggerSimEvent(eventToTrigger, valueToUse, hideAlert = false){
    url_to_call = "/event/"+eventToTrigger+"/trigger";
    $.post( url_to_call, { value_to_use: valueToUse } );

    if (!hideAlert) {
        temporaryAlert('', "Sending instruction", "success")
    }
}

function triggerSimEventFromField(eventToTrigger, fieldToUse, messageToDisplay = null){
    // Get the field and the value in there
    fieldToUse = "#" + fieldToUse
    valueToUse = $(fieldToUse).val();

    // Pass it to the API
    url_to_call = "/event/"+eventToTrigger+"/trigger";
    $.post( url_to_call, { value_to_use: valueToUse } );

    // Clear the field so it can be repopulated with the placeholder
    //$(fieldToUse).val("")

    if (messageToDisplay) {
        temporaryAlert('', messageToDisplay + " to " + valueToUse, "success")
    }

}

function triggerSimEventFromVar(eventToTrigger, VarToUse, messageToDisplay = null){
    // Get the field and the value in there
    valueToUse = VarToUse;

    // Pass it to the API
    url_to_call = "/event/"+eventToTrigger+"/trigger";
    $.post( url_to_call, { value_to_use: valueToUse } );

    // Clear the field so it can be repopulated with the placeholder
    //$(fieldToUse).val("")

    if (messageToDisplay) {
        temporaryAlert('', messageToDisplay + " to " + valueToUse, "success")
    }

}

function triggerCustomEmergency(emergency_type) {
    url_to_call = "/custom_emergency/" + emergency_type
    $.post (url_to_call)

    if (emergency_type === "random_engine_fire") {
        temporaryAlert("Fire!", "Random engine fire trigger sent", "error")
    }
}


function temporaryAlert(title, message, icon) {
    let timerInterval

    Swal.fire({
        title: title,
        html: message,
        icon: icon,
        timer: 1000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 1000)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}