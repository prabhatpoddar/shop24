import { Avatar, Button, Flex, Grid, GridItem, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";

export default function NewUser() {
  return (
    <div style={{ flex: 4 }}>
      <Heading textAlign="center" size='md' mt={10}>New User</Heading>
      
      
      <Flex w="95%" m="auto" mt={100}>
      <Flex  display="grid" gap={10}> 
      <Avatar  size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
      <input type="file" />
      </Flex>
      <Grid display="grid" gridTemplateColumns="1fr 1fr" w="80%" gap={10}>
        <Grid  >
          <GridItem>
            <Text>Fullname</Text>
            <Input w="100%" />

          </GridItem>
          <GridItem>
            <Text>Email</Text>
            <Input />

          </GridItem>
          <GridItem>
            <Text>Mobile</Text>
            <Input />

          </GridItem>
          </Grid>
          <Grid>
       
        
          <GridItem>
            <Text>Password</Text>
            <Input type="password" />

          </GridItem>
          <GridItem>
            <Text>Address</Text>
            <Textarea />

          </GridItem>
          <GridItem>
          <Select placeholder='Gender' name='gender'  >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </Select>
          </GridItem>

        </Grid>
        </Grid>
      </Flex>

      <Flex justifyContent="center" alignItems="center" mt={20}>
        <Button w={80} colorScheme="whatsapp">Create</Button>
      </Flex>


    </div>
  );
}
