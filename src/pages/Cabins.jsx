import { useEffect, useState } from "react";
import Heading from "@/ui/Heading";
import Row from "@/ui/Row";
import { getCabins } from "@/services/apiCabins.js";
import CabinTable from "@/features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading type="h1">All Cabins</Heading>
        <p>Filter / Soft</p>
      </Row>

      <Row>
        <CabinTable />
        <div>
          <Button onClick={() => setShowForm((show) => !show)}>
            Add new cabin
          </Button>
          {showForm && <CreateCabinForm />}
        </div>
      </Row>
    </>
  );
}

export default Cabins;
