import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react'
import { userRequest } from '../../requestMethod'

const Confirm = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast({
        position: 'top'
    })
    const handelDelete=(id)=>{
        userRequest.delete(`/users/delete/${id}`).then(res=>{
            toast({
                title: `Your is Deleted`,
                status: "info",
                isClosable: true,
            })
          
        }).catch(err=>{
            console.log('err:', err)
            toast({
                title: `Failed to delete user: ${id}`,
                status: "error",
                isClosable: true,
            })
        })
    
      }
  return (
    <div>
      <Button colorScheme='red' onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={()=>{
                onClose();
                handelDelete(id)
              }} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  )
}

export default Confirm
