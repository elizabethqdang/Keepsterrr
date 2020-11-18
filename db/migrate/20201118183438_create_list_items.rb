class CreateListItems < ActiveRecord::Migration[5.2]
  def change
		create_table :list_items do |t|
			t.integer	:note_id, null: false
			t.integer	:list_id, null: false
			t.integer	:owner_id, null: false
			t.string	:item, null: false
			t.boolean	:completed, null: false, default: false
			
			t.timestamps
			
			t.index	:note_id
			t.index	:list_id
    end
  end
end
