import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  Link,
  List,
  ListItem,
  Select,
  SimpleGrid,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Country, State, City } from "country-state-city";

const UserRegister = ({ isEditMode }) => {
  const [activeLink, setActiveLink] = useState("Personal");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    username: "",
    dob: "",
    gender: "",
    religion: "",
    parentName: "",
    parentEmail: "",
    parentContact: "",
    degree: "",
    institution: "",
    mobileNumber: "",
    alternateContact: "",
    studentEmail: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    maritalStatus: "",
  });

  // Get all countries
  const countries = Country.getAllCountries();

  // Get states of the selected country
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];

  // Get cities of the selected state
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
    setFormData((prevData) => ({
      ...prevData,
      country: value,
      state: "", // Clear the state and city when country changes
      city: "",
    }));
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setSelectedState(value);
    setFormData((prevData) => ({
      ...prevData,
      state: value,
      city: "", // Clear the city when state changes
    }));
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    setFormData((prevData) => ({
      ...prevData,
      city: value,
    }));
  };

  console.log(formData);
  const renderForm = () => {
    switch (activeLink) {
      case "Personal":
        return (
          <SimpleGrid columns={2} columnGap={5} rowGap={5} w={"full"}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Student Name</FormLabel>
                <Input
                  placeholder="Enter Your Name"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Enter Your Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  placeholder="Enter Your DOB"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  name="dob"
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">I prefer not to disclose</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Religion</FormLabel>
                <Select
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                >
                  <option value="" disabled>
                    Select Religion
                  </option>
                  <option value="male">Hinduism</option>
                  <option value="female">Islam</option>
                  <option value="other">Sikhism</option>
                  <option value="other">Jainism</option>
                  <option value="other">Bhuddhism</option>
                  <option value="other">I prefer not to disclose</option>
                </Select>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        );
      case "Parent":
        return (
          <SimpleGrid columns={2} columnGap={5} rowGap={5} w={"full"}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Parent Name</FormLabel>
                <Input
                  placeholder="Enter Your Parent Name"
                  value={formData.parentName}
                  onChange={handleChange}
                  name="parentName"
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Parent Email</FormLabel>
                <Input
                  placeholder="Enter Your Parent Email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Parent Contact No.</FormLabel>
                <Input
                  placeholder="Enter Your Parent No."
                  name="parentContact"
                  value={formData.parentContact}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
          </SimpleGrid>
        );

      case "Educational":
        return (
          <SimpleGrid columns={2} columnGap={5} rowGap={5} w={"full"}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Highest Degree</FormLabel>
                <Select
                  value={formData.degree}
                  name="degree"
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                >
                  <option value="" disabled>
                    Select Highest Degree
                  </option>
                  <option value="high-school">High School</option>
                  <option value="associates">Associate's Degree</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Institution Name</FormLabel>
                <Input
                  placeholder="Enter institution name"
                  value={formData.institution}
                  name="institution"
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
          </SimpleGrid>
        );
      case "Contact":
        return (
          <SimpleGrid columns={2} columnGap={5} rowGap={5} w={"full"}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Student Mobile Number</FormLabel>
                <Input
                  placeholder="Enter Your Mobile Number"
                  value={formData.mobileNumber}
                  name="mobileNumber"
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Alternate Contact</FormLabel>
                <Input
                  placeholder="Enter Your Alternate Number"
                  value={formData.alternateContact}
                  name="alternateContact"
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Student Email</FormLabel>
                <Input
                  placeholder="Enter Your Student Email"
                  name="studentEmail"
                  value={formData.studentEmail}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Residental Address</FormLabel>
                <Textarea
                  placeholder="Enter Your Residental Address"
                  rows={1}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select
                  placeholder="Select Country"
                  onChange={handleCountryChange}
                  value={selectedCountry}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                >
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl>
                <FormLabel>State</FormLabel>
                <Select
                  placeholder="Select State"
                  value={selectedState}
                  onChange={handleStateChange}
                  isDisabled={!selectedCountry}
                  bg={!isEditMode ? "gray.200" : "white"}
                >
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Select
                  placeholder="Select City"
                  value={selectedCity}
                  onChange={handleCityChange}
                  isDisabled={!selectedState}
                  bg={!isEditMode ? "gray.200" : "white"}
                >
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Pincode</FormLabel>
                <Input
                  placeholder="Enter Your Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                />
              </FormControl>
            </GridItem>
          </SimpleGrid>
        );
      case "Other":
        return (
          <SimpleGrid columns={2} columnGap={5} rowGap={5} w={"full"}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Marital Status</FormLabel>
                <Select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  isDisabled={!isEditMode}
                  bg={!isEditMode ? "gray.200" : "white"}
                >
                  <option value="" disabled>
                    Select Marital Status
                  </option>
                  <option value="married">Married</option>
                  <option value="single">Single</option>
                  <option value="divorce">Divorce</option>
                </Select>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <VStack flex={"0 0 70%"} boxShadow={"0 3px 6px rgba(0, 0, 0, .14)"} p={5}>
        <List
          w={"full"}
          display={"flex"}
          gap={{ base: 1, sm: 5 }}
          borderBottom={"1px solid #E5E8EC;"}
          //   py={3}
        >
          <ListItem
            onClick={() => setActiveLink("Personal")}
            borderBottom={
              activeLink === "Personal" ? "3px solid black" : "none"
            }
            py={3}
          >
            <Link href="#">Personal</Link>
          </ListItem>
          <ListItem
            onClick={() => setActiveLink("Parent")}
            borderBottom={activeLink === "Parent" ? "3px solid black" : "none"}
            py={3}
          >
            <Link href="#">Parent</Link>
          </ListItem>
          <ListItem
            onClick={() => setActiveLink("Educational")}
            borderBottom={
              activeLink === "Educational" ? "3px solid black" : "none"
            }
            py={3}
          >
            <Link href="#">Educational</Link>
          </ListItem>
          <ListItem
            onClick={() => setActiveLink("Contact")}
            borderBottom={activeLink === "Contact" ? "3px solid black" : "none"}
            py={3}
          >
            <Link href="#">Contact</Link>
          </ListItem>
          <ListItem
            onClick={() => setActiveLink("Other")}
            borderBottom={activeLink === "Other" ? "3px solid black" : "none"}
            py={3}
          >
            <Link href="#">Other</Link>
          </ListItem>
        </List>
        <Flex w={"full"} mt={5}>
          {renderForm()}
        </Flex>
      </VStack>
    </>
  );
};

export default UserRegister;
