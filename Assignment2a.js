const EventEmitter = require("events");

const student = new EventEmitter();

student.on("login", () => {
    console.log("Student logged Successfully");
        });

            student.on("assignment", () => {
                    console.log("Assignment Submitted");
                            });

                                    student.on("logout", () => {
                                                console.log("Student logged Out");
                                                            });

                                                                        student.on("exit", () => {
                                                                                        console.log("Exiting application");
                                                                                                        });

                                                                                                                        console.log("Student Activity Monitoring System");

                                                                                                                                        student.emit("login");
                                                                                                                                                        student.emit("assignment");
                                                                                                                                                                        student.emit("logout");
                                                                                                                                                                                        student.emit("exit");