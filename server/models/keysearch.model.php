<?php 
    class KeySearch {

        public function viewKeySearch($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
        
        public function addKeySearch($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function deleteKeySearch($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
    }

?>