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
let nav1_g3000_obs
let nav2_g3000_freq
let nav2_g3000_obs
let adf_g3000_freq

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
    });
	setTimeout(function() {
		displayRadio();
	}, 2500);
}

// Following 3 functions keep the OBS/ADF Card values after submit
function adf_deg_display(deg){
	
	adf_card_deg = deg;
	$("#ad-card-deg").attr('placeholder', adf_card_deg);
}

function nav1_deg_display(deg){
	alert(deg)
	nav1_obs_deg = deg;
	$("#OBS_1_heading").attr('placeholder', nav1_obs_deg);
}

function nav2_deg_display(deg){
	nav2_obs_deg = deg;
	$("#OBS_2_heading").attr('placeholder', nav2_obs_deg);
}

// Following 5 functions keep the G3000 navigation values after submit
function nav1_g3000_freq_display(freq){
	
	nav1_g3000_freq = freq;
	$("#NAV1_freq").attr('placeholder', nav1_g3000_freq);
}

function nav1_g3000_obs_display(deg){
	
	nav1_g3000_obs = deg;
	$("#OBS1_G3_heading").attr('placeholder', nav1_g3000_obs);
}

function nav2_g3000_freq_display(freq){
	
	nav2_g3000_freq = freq;
	$("#NAV2_freq").attr('placeholder', nav2_g3000_freq);
}

function nav2_g3000_obs_display(deg){
	
	nav2_g3000_obs = deg;
	$("#OBS2_G3_heading").attr('placeholder', nav2_g3000_obs);
}

function adf_g3000_freq_display(freq){
	
	adf_g3000_freq = freq;
	$("#ADF_G3_freq").attr('placeholder', adf_g3000_freq);
}

window.setInterval(function(){
    getSimulatorData();
    displayData();
    updateMap();
}, 2000);

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
	dummy_adf_stby_1000 = adf_stby_1000 * 1;
	dummy_adf_stby_100 = adf_stby_100 * 1;
	dummy_adf_stby_10 = adf_stby_10 * 1;
	dummy_adf_stby_1 = adf_stby_1 * 1;
	dummy_adf_use_1000 = adf_use_1000 * 1;
	dummy_adf_use_100 = adf_use_100 * 1;
	dummy_adf_use_10 = adf_use_10 * 1;
	dummy_adf_use_1 = adf_use_1 * 1;
	adf_use_1000 = dummy_adf_stby_1000 * 1;
	adf_use_100 = dummy_adf_stby_100 * 1;
	adf_use_10 = dummy_adf_stby_10 * 1;
	adf_use_1 = dummy_adf_stby_1 * 1;
	adf_stby_1000 = dummy_adf_use_1000 * 1;
	adf_stby_100 = dummy_adf_use_100 * 1;
	adf_stby_10 = dummy_adf_use_10 * 1;
	adf_stby_1 = dummy_adf_use_1 * 1;
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
	$("#adf_stby_10").text(adf_stby_10);
	$("#adf_stby_1").text(adf_stby_1);
	$("#adf_act_1000").text(adf_use_1000);
	$("#adf_act_100").text(adf_use_100);
	$("#adf_act_10").text(adf_use_10);
	$("#adf_act_1").text(adf_use_1);
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
	nav1_standby_floor = Math.floor(nav1_standby);
	nav1_standby_decimal = nav1_standby - nav1_standby_floor;
	nav1_standby_decimal = nav1_standby_decimal - 0.05;
	if (nav1_standby_decimal < 0) {
		nav1_standby_decimal = 0.95
	};
	nav1_standby = nav1_standby_floor + nav1_standby_decimal;
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1plus005() {
	// NAV 1 plus 0.05 MHz
	nav1_standby_floor = Math.floor(nav1_standby);
	nav1_standby_decimal = nav1_standby - nav1_standby_floor;
	nav1_standby_decimal = nav1_standby_decimal + 0.05;
	if (nav1_standby_decimal >= 1) {
		nav1_standby_decimal = 0.0
	};
	nav1_standby = nav1_standby_floor + nav1_standby_decimal;
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1switch() {
	dummy_nav1_standby = nav1_standby * 1;
	dummy_nav1_active = nav1_active * 1;
	nav1_active = dummy_nav1_standby * 1;
	nav1_standby = dummy_nav1_active * 1;
	nav1_standby = nav1_standby.toFixed(2);
	nav1_active = nav1_active.toFixed(2);
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
	nav2_standby_floor = Math.floor(nav2_standby);
	nav2_standby_decimal = nav2_standby - nav2_standby_floor;
	nav2_standby_decimal = nav2_standby_decimal - 0.05;
	if (nav2_standby_decimal < 0) {
		nav2_standby_decimal = 0.95
	};
	nav2_standby = nav2_standby_floor + nav2_standby_decimal;
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2plus005() {
	// NAV 2 plus 0.05 MHz
	nav2_standby_floor = Math.floor(nav2_standby);
	nav2_standby_decimal = nav2_standby - nav2_standby_floor;
	nav2_standby_decimal = nav2_standby_decimal + 0.05;
	if (nav2_standby_decimal >= 1) {
		nav2_standby_decimal = 0.0
	};
	nav2_standby = nav2_standby_floor + nav2_standby_decimal;
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2switch() {
	dummy_nav2_standby = nav2_standby * 1;
	dummy_nav2_active = nav2_active * 1;
	nav2_active = dummy_nav2_standby * 1;
	nav2_standby = dummy_nav2_active * 1;
	nav2_standby = nav2_standby.toFixed(2);
	nav2_active = nav2_active.toFixed(2);
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
		nav1_active = Number(data.NAV1_ACTIVE).toFixed(2);
		nav2_active = Number(data.NAV2_ACTIVE).toFixed(2);
		adf_active = Number(data.ADF_USE);
		adf_card_deg = Number(data.ADF_CARD_DEG);
		
		//Altitude
		altitude = data.INDICATED_ALTITUDE;
        //Control surfaces
        //gear_handle_position = data.GEAR_HANDLE_POSITION;
        //elevator_trim_pct = data.ELEVATOR_TRIM_PCT;
        //elevator_trim_pct_reversed = - elevator_trim_pct;
        //rudder_trim_pct = data.RUDDER_TRIM_PCT;
        //flaps_handle_pct = data.FLAPS_HANDLE_PERCENT;
        //flaps_handle_pct_reversed = - flaps_handle_pct;

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

    $("#autopilot-heading-lock-dir").attr('placeholder', autopilot_heading_lock_dir);
    $("#autopilot-altitude-lock-var").attr('placeholder', autopilot_altitude_lock_var);
    $("#autopilot-airspeed-hold-var").attr('placeholder', autopilot_airspeed_hold_var);
    $("#autopilot-pitch-hold-ref").attr('placeholder', autopilot_pitch_hold_ref);
    $("#autopilot-vertical-hold-var").attr('placeholder', autopilot_vertical_hold_var);
	
	//NAV Swap
	$("#ADF_heading").attr('placeholder', adf_card_deg);
	$("#OBS_1_heading").attr('placeholder', nav1_obs_deg);
	$("#OBS_2_heading").attr('placeholder', nav2_obs_deg);
	
	//NAV Direct
	$("#NAV1_freq").attr('placeholder', nav1_active);
	$("#OBS1_G3_heading").attr('placeholder', nav1_obs_deg);
	$("#NAV2_freq").attr('placeholder', nav2_active);
	$("#OBS2_G3_heading").attr('placeholder', nav2_obs_deg);
	$("#ADF_freq").attr('placeholder', adf_active);
	$("#ADF_direct_heading").attr('placeholder', adf_card_deg);

    //Control surfaces
    $("#gear-handle-position").html(gear_handle_position);
    if (gear_handle_position === "UP"){
        $("#gear-handle-position").removeClass("btn-success").addClass("btn-danger");
    } else {
        $("#gear-handle-position").removeClass("btn-danger").addClass("btn-success");
    }

    $("#flaps-handle-pct").text(flaps_handle_pct);
    $("#flaps-slider").slider({values: [flaps_handle_pct_reversed]})

    $("#elevator-trim-pct").text(elevator_trim_pct);
    $("#elevator-trim-slider").slider({values: [elevator_trim_pct_reversed]})

    //$("#rudder-trim-pct").text(rudder_trim_pct);
    //$("#rudder-trim-slider").slider({values: [rudder_trim_pct]})

    //Cabin
    if (cabin_seatbelts_alert_switch === 1){
        $("#seatbelt-sign").removeClass("btn-outline-danger").addClass("btn-danger").html("Seatbelt sign on");
    } else {
        $("#seatbelt-sign").removeClass("btn-danger").addClass("btn-outline-danger").html("Seatbelt sign off");
    }

    if (cabin_no_smoking_alert_switch === 1){
        $("#no-smoking-sign").removeClass("btn-outline-danger").addClass("btn-danger").html("No smoking sign on");
    } else {
        $("#no-smoking-sign").removeClass("btn-danger").addClass("btn-outline-danger").html("No smoking sign off");
    }}

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
        duration: 1500,
    });
    marker.setRotationAngle(compass);

    if (followPlane === true) {
        map.panTo(pos);
    }
}

function refreshMapSize() {
	setTimeout(function () {
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
        timer: 2000,
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
            }, 100)
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