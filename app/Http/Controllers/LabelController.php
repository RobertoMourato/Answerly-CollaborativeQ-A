<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

use App\Label;

class LabelController extends Controller
{
    public function startLabel(Request $request) 
    {
      $label = new Label();

      $this->authorize('start', $label);
    }

    /**
     * Creates a new label.
     *
     * @return Label The label created.
     */
    public function create(Request $request)
    {
      //Create label
      $label = new Label();

      //Check if it is authenticated
      $this->authorize('create', $label);

      //Check for repeated labels
      $name = $request->input('name');
      $label_id = '';
      $older_label = DB::select(DB::raw("select * from label where name = '$name'"));

      if ($older_label == null) {
        //Store label
        $label->name = $name;
        $label->save();
        $label_id = $label->id;
      }
      else $label_id = $older_label[0]->id;


      //Create question_label
      DB::table('question_label')->insert([
        ['question_id' => $request->input('question_index'), 'label_id' => $label_id]
      ]);
    }

    /**
     * Shows the Question's labels from a given id.
     *
     * @param  int  $id
     * @return Response
     */
    public function list($id)
    {
        $labels = DB::select(DB::raw("select label.name from question_label, label where question_label.question_id = $id and question_label.label_id = label.id"));

        return $labels;
    }
}