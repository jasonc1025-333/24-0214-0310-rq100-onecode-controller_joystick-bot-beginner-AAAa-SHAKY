// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsradio.onReceivedString(function (receivedString) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        if (!(device_Type_Bot_Bool)) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            quest_Note_3.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            "Only place that activates Bot: 1st micro:bit's Receiving a Network_Message is Designated as Bot"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            quest_Note_2.quest_Show_String_For_Note_Small_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            "Bot can only be activated by wake-up message from Controller-Remote"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            quest_Note_5.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            "Network Message Max_Character_Length: 19"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            device_Type_Bot_Bool = true
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            setup_BotOnly_Fn()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        } else if (device_Type_Bot_Bool && !(device_Mode_Edit_GroupChannelNum_Bool)) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    serial.writeLine("> RadioNetwork:> " + receivedString + " <")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                screen_Clear_Func()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsif (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    if (receivedString == "forward") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Pos,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Pos
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(2, 4)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "backward") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Neg,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Neg
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(2, 0)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "left") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Neg,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Pos
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(4, 2)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "right") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Pos,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_Full_Current_Neg
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(0, 2)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "stop") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        _codeComment_AsText = "To complement Gear Icons"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_ZERO_INT,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_ZERO_INT
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(2, 2)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        _codeComment_AsText = "During idle, show entity-type: B=Bot, C=Controller"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "gear_lo") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                            motor_Power_Full_Current_Pos = motor_Power_Gear_01_MAX
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsmotor_Power_Full_Current_Neg = -1 * motor_Power_Full_Current_Pos
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                            motor_Power_Half_Current = Math.round(0.5 * motor_Power_Full_Current_Pos)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "gear_hi") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                            motor_Power_Full_Current_Pos = motor_Power_Gear_02_MAX
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsmotor_Power_Full_Current_Neg = -1 * motor_Power_Full_Current_Pos
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                            motor_Power_Half_Current = Math.round(0.5 * motor_Power_Full_Current_Pos)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "arm_down") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        let servoArm_DOWN_DEGREES_INT = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        pins.servoWritePin(AnalogPin.P15, servoArm_DOWN_DEGREES_INT)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else if (receivedString == "arm_up") {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        let servoArm_UP_DEGREES_INT = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        pins.servoWritePin(AnalogPin.P15, servoArm_UP_DEGREES_INT)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    } else {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        _codeComment_AsText = "Error: Unknown Msg"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_ZERO_INT,
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        motor_Power_ZERO_INT
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                            _codeComment_AsText = "For now, all 4 corners = Error: Unknown Msg"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                            error_Message_Func("2024-0213-1700", receivedString)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsscreen_IconMessage_Func("error")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                network__CpuCycle_Post__Management_Func()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts})
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet motor_Power_Gear_Number_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet motor_Power_Half_Current = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet motor_Power_Full_Current_Neg = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet device_Type_Bot_Bool = false
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet network_GroupChannel_MyBotAndController_Base0_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tslet _codeComment_AsText = ""
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let motor_Power_Gear_Number_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let motor_Power_Half_Current = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let motor_Power_Full_Current_Neg = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let device_Type_Bot_Bool = false
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let network_GroupChannel_MyBotAndController_Base0_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let _codeComment_AsText = ""
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let motor_Power_Half_Current = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let motor_Power_Full_Current_Neg = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let device_Type_Bot_Bool = false
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let network_GroupChannel_MyBotAndController_Base0_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let _codeComment_AsText = ""
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let motor_Power_Half_Current = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let motor_Power_Full_Current_Neg = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let device_Type_Bot_Bool = false
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let network_GroupChannel_MyBotAndController_Base0_Int = 0
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts// //jwc o let _codeComment_AsText = ""
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsif (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    _codeComment_AsText = "Set GroupChannel-# for Both Bot & Controller-Remote."
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    network_GroupChannel_MyBotAndController_Base0_Int = 1
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    setup_Network_Fn()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tssetup_BotAndController_Fn()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts}
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsbasic.forever(function () {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    quest_Note_5.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    "Variables declared in 'main.ts' better than in 'main_backend.ts' (to prevent redundant var declarations)"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts})
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsbasic.forever(function () {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    if (device_Type_Controller_Bool && !(device_Mode_Edit_GroupChannelNum_Bool)) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        quest_Note_3.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        "Send Network Message to 'B'ot:: Controller_Joystick: Joystick"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        quest_Note_5.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        "Network Message Max_Character_Length: 19"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = quest_Sensors.quest_Get_Controller_Joystick_Polar_AngleDegree_IncrementsOf90_AsIntOut_Func(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            controller_Joystick__Polar_OriginAtCenter__RayLength_Int = quest_Sensors.quest_Get_Controller_Joystick_Polar_RayLength_AsIntOut_Func(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        screen_Clear_Func()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsquest_Note_2.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        "Convert Network Message to Operate 'B'ot: "
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        if (controller_Joystick__Polar_OriginAtCenter__RayLength_Int < controller_Joystick__Polar_OriginAtCenter__RayLength__Deadzone_AsIdle__INT) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            quest_Note_2.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            "Motion: Not"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            quest_Note_2.quest_Show_String_For_Note_Small_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            "Zero values if not exceed 'Deadzone_AsIdle'"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            radio.sendString("stop")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            led.plot(2, 2)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        } else {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                quest_Note_2.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                "Motion: Yes"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 0 || controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 360) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        "Controller_Joystick: East"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        radio.sendString("right")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(4, 2)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                } else if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 90) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        "Controller_Joystick: North"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        radio.sendString("forward")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(2, 0)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                } else if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 180) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        "Controller_Joystick: West"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        radio.sendString("left")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(0, 2)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                } else if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 270) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    if (true) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        "Controller_Joystick: South"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        radio.sendString("backward")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                        led.plot(2, 4)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                } else {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    quest_Note_4.quest_Show_String_For_Note_Small_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    "Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    error_Message_Func("2024-0212-1730", convertToText(controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int))
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                if (false) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                    convert_Controller_Joystick_AngleDegrees_ToMicrobit5x5Screen_Fn(controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts                }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        network__CpuCycle_Post__Management_Func()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts})
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.tsbasic.forever(function () {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    if (device_Type_Controller_Bool && !(device_Mode_Edit_GroupChannelNum_Bool)) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        quest_Note_3.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        quest_Note_5.quest_Show_String_For_Note_Big_Fn(
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        "Network Message Max_Character_Length: 19"
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        )
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            motor_Power_Gear_Number_Int = 1
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            radio.sendString("gear_lo")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            led.plot(2, 1)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            motor_Power_Gear_Number_Int = 2
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            radio.sendString("gear_hi")
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts            led.plot(2, 3)
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts        network__CpuCycle_Post__Management_Func()
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts    }
// //jwc since designed as ext, moved from this main.ts to test.ts and subscriber:main.ts})
