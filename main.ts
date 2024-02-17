radio.onReceivedString(function (receivedString) {
    if (true) {
        if (!(device_Type_Bot_Bool)) {
            quest_Note_3.quest_Show_String_For_Note_Big_Fn(
            "Only place that activates Bot: 1st micro:bit's Receiving a Network_Message is Designated as Bot"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Fn(
            "Bot can only be activated by wake-up message from Controller-Remote"
            )
            quest_Note_5.quest_Show_String_For_Note_Big_Fn(
            "Network Message Max_Character_Length: 19"
            )
            device_Type_Bot_Bool = true
            setup_BotOnly_Fn()
        } else if (device_Type_Bot_Bool && !(device_Mode_Edit_GroupChannelNum_Bool)) {
            if (true) {
                if (true) {
                    serial.writeLine("> RadioNetwork:> " + receivedString + " <")
                }
                screen_Clear_Func()
if (true) {
                    if (receivedString == "forward") {
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        motor_Power_Full_Current_Pos,
                        motor_Power_Full_Current_Pos
                        )
                        led.plot(2, 4)
                    } else if (receivedString == "backward") {
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        motor_Power_Full_Current_Neg,
                        motor_Power_Full_Current_Neg
                        )
                        led.plot(2, 0)
                    } else if (receivedString == "left") {
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        motor_Power_Full_Current_Neg,
                        motor_Power_Full_Current_Pos
                        )
                        led.plot(4, 2)
                    } else if (receivedString == "right") {
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        motor_Power_Full_Current_Pos,
                        motor_Power_Full_Current_Neg
                        )
                        led.plot(0, 2)
                    } else if (receivedString == "stop") {
                        _codeComment_AsText = "To complement Gear Icons"
                        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        motor_Power_ZERO_INT,
                        motor_Power_ZERO_INT
                        )
                        led.plot(2, 2)
                        _codeComment_AsText = "During idle, show entity-type: B=Bot, C=Controller"
                    } else if (receivedString == "gear_lo") {
                        if (true) {
                            motor_Power_Full_Current_Pos = motor_Power_Gear_01_MAX
motor_Power_Full_Current_Neg = -1 * motor_Power_Full_Current_Pos
                            motor_Power_Half_Current = Math.round(0.5 * motor_Power_Full_Current_Pos)
                        }
                    } else if (receivedString == "gear_hi") {
                        if (true) {
                            motor_Power_Full_Current_Pos = motor_Power_Gear_02_MAX
motor_Power_Full_Current_Neg = -1 * motor_Power_Full_Current_Pos
                            motor_Power_Half_Current = Math.round(0.5 * motor_Power_Full_Current_Pos)
                        }
                    } else if (receivedString == "arm_down") {
                        let servoArm_DOWN_DEGREES_INT = 0
                        pins.servoWritePin(AnalogPin.P15, servoArm_DOWN_DEGREES_INT)
                    } else if (receivedString == "arm_up") {
                        let servoArm_UP_DEGREES_INT = 0
                        pins.servoWritePin(AnalogPin.P15, servoArm_UP_DEGREES_INT)
                    } else {
                        _codeComment_AsText = "Error: Unknown Msg"
                        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        motor_Power_ZERO_INT,
                        motor_Power_ZERO_INT
                        )
                        if (true) {
                            _codeComment_AsText = "For now, all 4 corners = Error: Unknown Msg"
                            error_Message_Func("2024-0213-1700", receivedString)
screen_IconMessage_Func("error")
                        }
                    }
                }
                network__CpuCycle_Post__Management_Func()
            }
        }
    }
})
let motor_Power_Gear_Number_Int = 0
let controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
let controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
let motor_Power_Half_Current = 0
let motor_Power_Full_Current_Neg = 0
let device_Type_Bot_Bool = false
let network_GroupChannel_MyBotAndController_Base0_Int = 0
let _codeComment_AsText = ""
// //jwc o let motor_Power_Gear_Number_Int = 0
// //jwc o let controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
// //jwc o let controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
// //jwc o let motor_Power_Half_Current = 0
// //jwc o let motor_Power_Full_Current_Neg = 0
// //jwc o let device_Type_Bot_Bool = false
// //jwc o let network_GroupChannel_MyBotAndController_Base0_Int = 0
// //jwc o let _codeComment_AsText = ""
// //jwc o let controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
// //jwc o let controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
// //jwc o let motor_Power_Half_Current = 0
// //jwc o let motor_Power_Full_Current_Neg = 0
// //jwc o let device_Type_Bot_Bool = false
// //jwc o let network_GroupChannel_MyBotAndController_Base0_Int = 0
// //jwc o let _codeComment_AsText = ""
// //jwc o let controller_Joystick__Polar_OriginAtCenter__RayLength_Int = 0
// //jwc o let controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = 0
// //jwc o let motor_Power_Half_Current = 0
// //jwc o let motor_Power_Full_Current_Neg = 0
// //jwc o let device_Type_Bot_Bool = false
// //jwc o let network_GroupChannel_MyBotAndController_Base0_Int = 0
// //jwc o let _codeComment_AsText = ""
if (true) {
    _codeComment_AsText = "Set GroupChannel-# for Both Bot & Controller-Remote."
    network_GroupChannel_MyBotAndController_Base0_Int = 1
    setup_Network_Fn()
setup_BotAndController_Fn()
}
basic.forever(function () {
    quest_Note_5.quest_Show_String_For_Note_Big_Fn(
    "Variables declared in 'main.ts' better than in 'main_backend.ts' (to prevent redundant var declarations)"
    )
})
basic.forever(function () {
    if (device_Type_Controller_Bool && !(device_Mode_Edit_GroupChannelNum_Bool)) {
        quest_Note_3.quest_Show_String_For_Note_Big_Fn(
        "Send Network Message to 'B'ot:: Controller_Joystick: Joystick"
        )
        quest_Note_5.quest_Show_String_For_Note_Big_Fn(
        "Network Message Max_Character_Length: 19"
        )
        if (true) {
            controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int = quest_Sensors.quest_Get_Controller_Joystick_Polar_AngleDegree_IncrementsOf90_AsIntOut_Func(
            )
            controller_Joystick__Polar_OriginAtCenter__RayLength_Int = quest_Sensors.quest_Get_Controller_Joystick_Polar_RayLength_AsIntOut_Func(
            )
        }
        screen_Clear_Func()
quest_Note_2.quest_Show_String_For_Note_Big_Fn(
        "Convert Network Message to Operate 'B'ot: "
        )
        if (controller_Joystick__Polar_OriginAtCenter__RayLength_Int < controller_Joystick__Polar_OriginAtCenter__RayLength__Deadzone_AsIdle__INT) {
            quest_Note_2.quest_Show_String_For_Note_Big_Fn(
            "Motion: Not"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Fn(
            "Zero values if not exceed 'Deadzone_AsIdle'"
            )
            radio.sendString("stop")
            led.plot(2, 2)
        } else {
            if (true) {
                quest_Note_2.quest_Show_String_For_Note_Big_Fn(
                "Motion: Yes"
                )
                if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 0 || controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 360) {
                    if (true) {
                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
                        "Controller_Joystick: East"
                        )
                        radio.sendString("right")
                        led.plot(4, 2)
                    }
                } else if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 90) {
                    if (true) {
                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
                        "Controller_Joystick: North"
                        )
                        radio.sendString("forward")
                        led.plot(2, 0)
                    }
                } else if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 180) {
                    if (true) {
                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
                        "Controller_Joystick: West"
                        )
                        radio.sendString("left")
                        led.plot(0, 2)
                    }
                } else if (controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int == 270) {
                    if (true) {
                        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
                        "Controller_Joystick: South"
                        )
                        radio.sendString("backward")
                        led.plot(2, 4)
                    }
                } else {
                    quest_Note_4.quest_Show_String_For_Note_Small_Fn(
                    "Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'"
                    )
                    error_Message_Func("2024-0212-1730", convertToText(controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int))
                }
                if (false) {
                    convert_Controller_Joystick_AngleDegrees_ToMicrobit5x5Screen_Fn(controller_Joystick__Polar_OriginAtCenter__AngleDegree_Int)
                }
            }
        }
        network__CpuCycle_Post__Management_Func()
    }
})
basic.forever(function () {
    if (device_Type_Controller_Bool && !(device_Mode_Edit_GroupChannelNum_Bool)) {
        quest_Note_3.quest_Show_String_For_Note_Big_Fn(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_5.quest_Show_String_For_Note_Big_Fn(
        "Network Message Max_Character_Length: 19"
        )
        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
            motor_Power_Gear_Number_Int = 1
            radio.sendString("gear_lo")
            led.plot(2, 1)
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
            motor_Power_Gear_Number_Int = 2
            radio.sendString("gear_hi")
            led.plot(2, 3)
        }
        network__CpuCycle_Post__Management_Func()
    }
})
