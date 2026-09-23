// Function to move to the next page
function nextPage(currentPageId, nextPageId) {

    const currentPage = document.getElementById(currentPageId);

        // Find all required fields on the current page
            const requiredInputs = currentPage.querySelectorAll("[required]");

                // Check whether all required fields are filled
                    for (let input of requiredInputs) {

                            if (!input.checkValidity()) {
                                        input.reportValidity();
                                                    return;
                                                            }
                                                                }

                                                                    // Hide current page
                                                                        document.getElementById(currentPageId).style.display = "none";

                                                                            // Show next page
                                                                                document.getElementById(nextPageId).style.display = "block";
                                                                                }


                                                                                // Function to move to the previous page
                                                                                function prevPage(currentPageId, prevPageId) {

                                                                                    // Hide current page
                                                                                        document.getElementById(currentPageId).style.display = "none";

                                                                                            // Show previous page
                                                                                                document.getElementById(prevPageId).style.display = "block";
                                                                                                }


                                                                                                // Function to handle quiz submission
                                                                                                function submitForm(event) {

                                                                                                    // Stop the form from refreshing the page
                                                                                                        event.preventDefault();

                                                                                                            // Display success message
                                                                                                                alert("Quiz submitted successfully! Thank you.");

                                                                                                                    // Reset all form fields
                                                                                                                        document.getElementById("quizForm").reset();

                                                                                                                            // Hide Page 3
                                                                                                                                document.getElementById("page3").style.display = "none";

                                                                                                                                    // Show Page 1 again
                                                                                                                                        document.getElementById("page1").style.display = "block";
                                                                                                                                        }