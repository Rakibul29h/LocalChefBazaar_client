import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import CreateMealForm from '../../DashBoard/Form/CreateMealForm'
import UpdateMealForm from '../../DashBoard/Form/UpdateMealForm'


export default function UpdateMealModal({isOpen,setIsOpen,data}) {
  

  return (
    <>
  

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  bg-[#3130306e] items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-white p-6 shadow-sm duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-gray-700">
                Update
              </DialogTitle>
                <div>
                    <UpdateMealForm data={data} setIsOpen={setIsOpen}></UpdateMealForm>
                </div>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
