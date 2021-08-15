//General Data
let selected_plane

//JF PA-28 Warrior II Vars
let JF_PA_28_WARRIOR_AP_HDG;
let JF_PA_28_WARRIOR_AP_ROLL;
let JF_PA_28_WARRIOR_AP_MODE;
let JF_PA_28_WARRIOR_LIGHT_BCN;
let JF_PA_28_WARRIOR_AP_NAV;
let JF_PA_28_WARRIOR_FUEL_PUMP;
let JF_PA_28_WARRIOR_FUEL_SEL;
let JF_PA_28_WARRIOR_EFB;

//JF PA-28R Vars
let JF_PA_28R_AP_HDG;
let JF_PA_28R_AP_ROLL;
let JF_PA_28R_AP_MODE;
let JF_PA_28R_LIGHT_BCN;
let JF_PA_28R_AP_NAV;
let JF_PA_28R_FUEL_SEL;

//MilViz Corsair Vars
let MILVIZ_CORSAIR_OIL_COOLER;
let MILVIZ_CORSAIR_INTERCOOLER;
let MILVIZ_CORSAIR_COWL_FLAPS;
let MILVIZ_CORSAIR_COWL_FLAPS2;
let MILVIZ_CORSAIR_SUPERCHARGER;
let MILVIZ_CORSAIR_FUEL_SELECT;
let MILVIZ_CORSAIR_LOCK_TAILWHEEL;
let MILVIZ_CORSAIR_GUN_LIGHT;
let MILVIZ_CORSAIR_FUEL_PUMP;
let MILVIZ_CORSAIR_EXT_LIGHTS;
let MILVIZ_CORSAIR_WING_LIGHTS;
let MILVIZ_CORSAIR_TAIL_LIGHTS;
let MILVIZ_CORSAIR_FORM_LIGHTS;
let MILVIZ_CORSAIR_SECTION_LIGHTS;
let MILVIZ_CORSAIR_SECSEL_LIGHTS;
let MILVIZ_CORSAIR_APP_LIGHTS;
let MILVIZ_CORSAIR_COCKPIT_LIGHTS;
let MILVIZ_CORSAIR_CHART_LIGHTS;
let MILVIZ_CORSAIR_LPANEL_LIGHTS;
let MILVIZ_CORSAIR_RPANEL_LIGHTS;
let MILVIZ_CORSAIR_LINST_LIGHTS;
let MILVIZ_CORSAIR_RINST_LIGHTS;
let MILVIZ_CORSAIR_DEFROST;
let MILVIZ_CORSAIR_PITOT_HEAT;
let MILVIZ_CORSAIR_RECPT;

//Get Vars
function getSimulatorData() {
	$.getJSON($SCRIPT_ROOT + '/ui', {}, function(data) {
		//Get Plane
		selected_plane = data.selected_plane;
		
		//JF PA-28 Warrior II
		if (selected_plane.substring(0, 7) == "PA-28-1") {
			JF_PA_28_WARRIOR_LIGHT_BCN = data.JF_PA_28_WARRIOR_LIGHT_BCN;
			JF_PA_28_WARRIOR_AP_HDG = data.JF_PA_28_WARRIOR_AP_HDG;
			JF_PA_28_WARRIOR_AP_NAV = data.JF_PA_28_WARRIOR_AP_NAV;
			JF_PA_28_WARRIOR_AP_ROLL = data.JF_PA_28_WARRIOR_AP_ROLL;
			JF_PA_28_WARRIOR_AP_MODE = data.JF_PA_28_WARRIOR_AP_MODE;
            JF_PA_28_WARRIOR_FUEL_PUMP = data.FUEL_PUMP;
			JF_PA_28_WARRIOR_FUEL_SEL = data.JF_PA_28_WARRIOR_FUEL_SEL;
            JF_PA_28_WARRIOR_EFB = data.JF_PA_28_WARRIOR_EFB;
		}
		//JF PA-28R
		if (selected_plane.substring(0, 6) == "PA-28R") {
			JF_PA_28R_LIGHT_BCN = data.JF_PA_28R_LIGHT_BCN;
			JF_PA_28R_AP_HDG = data.JF_PA_28R_AP_HDG;
			JF_PA_28R_AP_NAV = data.JF_PA_28R_AP_NAV;
			JF_PA_28R_AP_ROLL = data.JF_PA_28R_AP_ROLL;
			JF_PA_28R_AP_MODE = data.JF_PA_28R_AP_MODE;
			JF_PA_28R_FUEL_SEL = data.JF_PA_28R_FUEL_SEL;
		}
		//MILVIZ Corsair
		if (selected_plane.substring(0, 5) == "FG-1D") {
			MILVIZ_CORSAIR_OIL_COOLER = data.MILVIZ_CORSAIR_OIL_COOLER;
			MILVIZ_CORSAIR_INTERCOOLER = data.MILVIZ_CORSAIR_INTERCOOLER;
			MILVIZ_CORSAIR_SUPERCHARGER = data.MILVIZ_CORSAIR_SUPERCHARGER;
			MILVIZ_CORSAIR_FUEL_SELECT = data.MILVIZ_CORSAIR_FUEL_SELECT;
			MILVIZ_CORSAIR_LOCK_TAILWHEEL = data.MILVIZ_CORSAIR_LOCK_TAILWHEEL;
			MILVIZ_CORSAIR_GUN_LIGHT = data.MILVIZ_CORSAIR_GUN_LIGHT;
			MILVIZ_CORSAIR_FUEL_PUMP = data.MILVIZ_CORSAIR_FUEL_PUMP;
			MILVIZ_CORSAIR_EXT_LIGHTS = data.MILVIZ_CORSAIR_EXT_LIGHTS;
			MILVIZ_CORSAIR_WING_LIGHTS = data.MILVIZ_CORSAIR_WING_LIGHTS;
			MILVIZ_CORSAIR_TAIL_LIGHTS = data.MILVIZ_CORSAIR_TAIL_LIGHTS;
			MILVIZ_CORSAIR_FORM_LIGHTS = data.MILVIZ_CORSAIR_FORM_LIGHTS;
			MILVIZ_CORSAIR_SECTION_LIGHTS = data.MILVIZ_CORSAIR_SECTION_LIGHTS;
			MILVIZ_CORSAIR_SECSEL_LIGHTS = data.MILVIZ_CORSAIR_SECSEL_LIGHTS;
			MILVIZ_CORSAIR_APP_LIGHTS = data.MILVIZ_CORSAIR_APP_LIGHTS;
			MILVIZ_CORSAIR_COCKPIT_LIGHTS = data.MILVIZ_CORSAIR_COCKPIT_LIGHTS;
			MILVIZ_CORSAIR_CHART_LIGHTS = data.MILVIZ_CORSAIR_CHART_LIGHTS;
			MILVIZ_CORSAIR_LPANEL_LIGHTS = data.MILVIZ_CORSAIR_LPANEL_LIGHTS;
			MILVIZ_CORSAIR_RPANEL_LIGHTS = data.MILVIZ_CORSAIR_RPANEL_LIGHTS;
			MILVIZ_CORSAIR_LINST_LIGHTS = data.MILVIZ_CORSAIR_LINST_LIGHTS;
			MILVIZ_CORSAIR_RINST_LIGHTS = data.MILVIZ_CORSAIR_RINST_LIGHTS;
			MILVIZ_CORSAIR_DEFROST = data.MILVIZ_CORSAIR_DEFROST;
			MILVIZ_CORSAIR_PITOT_HEAT = data.MILVIZ_CORSAIR_PITOT_HEAT;
			MILVIZ_CORSAIR_RECPT = data.MILVIZ_CORSAIR_RECPT;
			MILVIZ_CORSAIR_BNC_LIGHTS = data.MILVIZ_CORSAIR_BNC_LIGHTS;
			MILVIZ_CORSAIR_RECOGN_LIGHTS = data.MILVIZ_CORSAIR_RECOGN_LIGHTS;
			MILVIZ_CORSAIR_LANDING_LIGHTS = data.MILVIZ_CORSAIR_LANDING_LIGHTS;
		}
		
	});
	return false;
}

// Display sim data which needs to be updated regularly 
function displayData() {
	//JF PA-28 Warrior II
	if (selected_plane.substring(0, 7) == "PA-28-1") {
        checkAndUpdateButton("#jf_pa28_fuel-pump-on-off", JF_PA_28_WARRIOR_FUEL_PUMP);
        checkAndUpdateButton("#jf_pa28_efb-on-off", JF_PA_28_WARRIOR_EFB);
		checkAndUpdateButton("#jf_pa28_bcn_light", JF_PA_28_WARRIOR_LIGHT_BCN);
		checkAndUpdateButton("#jf_pa28_ap_hdg", JF_PA_28_WARRIOR_AP_HDG);
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_nav", JF_PA_28_WARRIOR_AP_MODE, 0, onBtn="btn-light", offBtn="btn-secondary", onText="NAV", offText="NAV");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_mode_omni", JF_PA_28_WARRIOR_AP_MODE, 1, onBtn="btn-light", offBtn="btn-secondary", onText="OMNI", offText="OMNI");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_hdg", JF_PA_28_WARRIOR_AP_MODE, 2, onBtn="btn-light", offBtn="btn-secondary", onText="HDG", offText="HDG");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_apr", JF_PA_28_WARRIOR_AP_MODE, 3, onBtn="btn-light", offBtn="btn-secondary", onText="APR", offText="APR");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_mode_locn", JF_PA_28_WARRIOR_AP_MODE, 3, onBtn="btn-light", offBtn="btn-secondary", onText="LOC-N", offText="LOC-N");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_locr", JF_PA_28_WARRIOR_AP_MODE, 4, onBtn="btn-light", offBtn="btn-secondary", onText="LOC-R", offText="LOC-R");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l30", JF_PA_28_WARRIOR_AP_ROLL, 0, onBtn="btn-light", offBtn="btn-secondary", onText="L30°", offText="L30°");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l20", JF_PA_28_WARRIOR_AP_ROLL, 10, onBtn="btn-light", offBtn="btn-secondary", onText="L20°", offText="L20°");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l10", JF_PA_28_WARRIOR_AP_ROLL, 20, onBtn="btn-light", offBtn="btn-secondary", onText="L10°", offText="L10°");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_roll_off", JF_PA_28_WARRIOR_AP_ROLL, 30, onBtn="btn-light", offBtn="btn-secondary", onText="OFF", offText="OFF");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r10", JF_PA_28_WARRIOR_AP_ROLL, 40, onBtn="btn-light", offBtn="btn-secondary", onText="R10°", offText="R10°");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r20", JF_PA_28_WARRIOR_AP_ROLL, 50, onBtn="btn-light", offBtn="btn-secondary", onText="R20°", offText="R20°");
		//checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r30", JF_PA_28_WARRIOR_AP_ROLL, 60, onBtn="btn-light", offBtn="btn-secondary", onText="R30°", offText="R30°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_nav1", JF_PA_28_WARRIOR_AP_NAV, 0, onBtn="btn-light", offBtn="btn-secondary", onText="NAV1", offText="NAV1");
		checkAndUpdateButtonCustom("#jf_pa28_ap_nav2", JF_PA_28_WARRIOR_AP_NAV, 2, onBtn="btn-light", offBtn="btn-secondary", onText="NAV2", offText="NAV2");
		checkAndUpdateButtonCustom("#jf_pa28_ap_off", JF_PA_28_WARRIOR_AP_NAV, 1, onBtn="btn-light", offBtn="btn-secondary", onText="OFF", offText="OFF");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_cut", JF_PA_28_WARRIOR_FUEL_SEL, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Cut", offText="Cut");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_left", JF_PA_28_WARRIOR_FUEL_SEL, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Left", offText="Left");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_right", JF_PA_28_WARRIOR_FUEL_SEL, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Right", offText="Right");
	}

	//JF PA-28R
	if (selected_plane.substring(0, 6) == "PA-28R") {
		checkAndUpdateButton("#jf_pa28_bcn_light", JF_PA_28R_LIGHT_BCN);
		checkAndUpdateButton("#jf_pa28_ap_hdg", JF_PA_28R_AP_HDG);
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_nav", JF_PA_28R_AP_MODE, 0, onBtn="btn-light", offBtn="btn-secondary", onText="NAV", offText="NAV");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_omni", JF_PA_28R_AP_MODE, 1, onBtn="btn-light", offBtn="btn-secondary", onText="OMNI", offText="OMNI");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_hdg", JF_PA_28R_AP_MODE, 2, onBtn="btn-light", offBtn="btn-secondary", onText="HDG", offText="HDG");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_locn", JF_PA_28R_AP_MODE, 3, onBtn="btn-light", offBtn="btn-secondary", onText="LOC-N", offText="LOC-N");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_locr", JF_PA_28R_AP_MODE, 4, onBtn="btn-light", offBtn="btn-secondary", onText="LOC-R", offText="LOC-R");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l30", JF_PA_28R_AP_ROLL, 0, onBtn="btn-light", offBtn="btn-secondary", onText="L30°", offText="L30°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l20", JF_PA_28R_AP_ROLL, 10, onBtn="btn-light", offBtn="btn-secondary", onText="L20°", offText="L20°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l10", JF_PA_28R_AP_ROLL, 20, onBtn="btn-light", offBtn="btn-secondary", onText="L10°", offText="L10°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_off", JF_PA_28R_AP_ROLL, 30, onBtn="btn-light", offBtn="btn-secondary", onText="OFF", offText="OFF");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r10", JF_PA_28R_AP_ROLL, 40, onBtn="btn-light", offBtn="btn-secondary", onText="R10°", offText="R10°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r20", JF_PA_28R_AP_ROLL, 50, onBtn="btn-light", offBtn="btn-secondary", onText="R20°", offText="R20°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r30", JF_PA_28R_AP_ROLL, 60, onBtn="btn-light", offBtn="btn-secondary", onText="R30°", offText="R30°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_nav1", JF_PA_28R_AP_NAV, 0, onBtn="btn-light", offBtn="btn-secondary", onText="NAV1", offText="NAV1");
		checkAndUpdateButtonCustom("#jf_pa28_ap_nav2", JF_PA_28R_AP_NAV, 2, onBtn="btn-light", offBtn="btn-secondary", onText="NAV2", offText="NAV2");
		checkAndUpdateButtonCustom("#jf_pa28_ap_off", JF_PA_28R_AP_NAV, 1, onBtn="btn-light", offBtn="btn-secondary", onText="OFF", offText="OFF");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_cut", JF_PA_28R_FUEL_SEL, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Cut", offText="Cut");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_left", JF_PA_28R_FUEL_SEL, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Left", offText="Left");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_right", JF_PA_28R_FUEL_SEL, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Right", offText="Right");
	}
	
	//MILVIZ Corsair
	if (selected_plane.substring(0, 5) == "FG-1D") {
		$("#milviz_corsair_supercharger").text(Math.round(MILVIZ_CORSAIR_SUPERCHARGER) + "%");
		$("#milviz_corsair_oilcooler").text(Math.round(MILVIZ_CORSAIR_OIL_COOLER) + "%");
		$("#milviz_corsair_intercooler").text(Math.round(MILVIZ_CORSAIR_INTERCOOLER) + "%");
		$("#milviz_corsair_chartb").text(Math.round(MILVIZ_CORSAIR_CHART_LIGHTS) + "%");
		$("#milviz_corsair_lpanel").text(Math.round(MILVIZ_CORSAIR_LPANEL_LIGHTS) + "%");
		$("#milviz_corsair_rpanel").text(Math.round(MILVIZ_CORSAIR_RPANEL_LIGHTS) + "%");
		$("#milviz_corsair_linst").text(Math.round(MILVIZ_CORSAIR_LINST_LIGHTS) + "%");
		$("#milviz_corsair_rinst").text(Math.round(MILVIZ_CORSAIR_RINST_LIGHTS) + "%");
		checkAndUpdateButton("#milviz_corsair_fuel_pump", MILVIZ_CORSAIR_FUEL_PUMP);
		checkAndUpdateButton("#milviz_corsair_dive_brake", spoilers, "Dive Brake (On)", "Dive Brake (Off)");
		checkAndUpdateButton("#milviz_corsair_tail_wheel", MILVIZ_CORSAIR_LOCK_TAILWHEEL, "Lock Tail Wheel (On)", "Lock Tail Wheel (Off)");
		checkAndUpdateButton("#milviz_corsair_cockpit_lights", MILVIZ_CORSAIR_COCKPIT_LIGHTS, "Cockpit Lights (On)", "Cockpit Lights (Off)");
		checkAndUpdateButton("#milviz_corsair_defrost", MILVIZ_CORSAIR_DEFROST, "Defrost (On)", "Defrost (Off)");
		checkAndUpdateButton("#milviz_corsair_pitotheat", MILVIZ_CORSAIR_PITOT_HEAT, "Pitot Heat (On)", "Pitot Heat (Off)");
		checkAndUpdateButton("#milviz_corsair_recpt", MILVIZ_CORSAIR_RECPT, "Recpt (On)", "Recpt (Off)");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_off", MILVIZ_CORSAIR_FUEL_SELECT, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_main", MILVIZ_CORSAIR_FUEL_SELECT, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Main", offText="Main");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_reserve", MILVIZ_CORSAIR_FUEL_SELECT, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Reserve", offText="Reserve");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_lh", MILVIZ_CORSAIR_FUEL_SELECT, 3, onBtn="btn-light", offBtn="btn-secondary", onText="L.H.Wing", offText="L.H.Wing");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_rh", MILVIZ_CORSAIR_FUEL_SELECT, 4, onBtn="btn-light", offBtn="btn-secondary", onText="R.H.Wing", offText="R.H.Wing");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_cntr", MILVIZ_CORSAIR_FUEL_SELECT, 5, onBtn="btn-light", offBtn="btn-secondary", onText="Cntr Drop", offText="Cntr Drop");
		checkAndUpdateButtonCustom("#milviz_corsair_bcn_down", MILVIZ_CORSAIR_BNC_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Down", offText="Down");
		checkAndUpdateButtonCustom("#milviz_corsair_bcn_off", MILVIZ_CORSAIR_BNC_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_bcn_red", MILVIZ_CORSAIR_BNC_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Red", offText="Red");
		checkAndUpdateButtonCustom("#milviz_corsair_recogn_steady", MILVIZ_CORSAIR_RECOGN_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Steady", offText="Steady");
		checkAndUpdateButtonCustom("#milviz_corsair_recogn_off", MILVIZ_CORSAIR_RECOGN_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_recogn_flash", MILVIZ_CORSAIR_RECOGN_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Flash", offText="Flash");
		checkAndUpdateButtonCustom("#milviz_corsair_landing_on", MILVIZ_CORSAIR_LANDING_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="On", offText="On");
		checkAndUpdateButtonCustom("#milviz_corsair_landing_off", MILVIZ_CORSAIR_LANDING_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_landing_amber", MILVIZ_CORSAIR_LANDING_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Amber", offText="Amber");
		checkAndUpdateButtonCustom("#milviz_corsair_extl_steady", MILVIZ_CORSAIR_EXT_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Steady", offText="Steady");
		checkAndUpdateButtonCustom("#milviz_corsair_extl_off", MILVIZ_CORSAIR_EXT_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_extl_flash", MILVIZ_CORSAIR_EXT_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Flash", offText="Flash");
		checkAndUpdateButtonCustom("#milviz_corsair_wing_brigth", MILVIZ_CORSAIR_WING_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_wing_off", MILVIZ_CORSAIR_WING_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_wing_dim", MILVIZ_CORSAIR_WING_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_tail_bright", MILVIZ_CORSAIR_TAIL_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_tail_off", MILVIZ_CORSAIR_TAIL_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_tail_dim", MILVIZ_CORSAIR_TAIL_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_form_bright", MILVIZ_CORSAIR_FORM_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_form_off", MILVIZ_CORSAIR_FORM_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_form_dim", MILVIZ_CORSAIR_FORM_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_section_bright", MILVIZ_CORSAIR_SECTION_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_section_off", MILVIZ_CORSAIR_SECTION_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_section_dim", MILVIZ_CORSAIR_SECTION_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_secsel_steady", MILVIZ_CORSAIR_SECSEL_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_secsel_off", MILVIZ_CORSAIR_SECSEL_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_secsel_code", MILVIZ_CORSAIR_SECSEL_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_app_off", MILVIZ_CORSAIR_APP_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_app_on", MILVIZ_CORSAIR_APP_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="On", offText="On");
		
	}
}