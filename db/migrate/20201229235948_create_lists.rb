class CreateLists < ActiveRecord::Migration[5.2]
  def change
		create_table :lists do |t|
			t.integer	:note_id, null: false
			t.integer	:owner_id, null: false
			t.string	:title
			t.boolean	:pinned, default: false
			t.string	:list_item_ids
			
			t.timestamps
			
			t.index	:note_id
    end
  end
end
