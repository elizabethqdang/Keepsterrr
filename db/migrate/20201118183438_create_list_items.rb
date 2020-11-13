class CreateListItems < ActiveRecord::Migration[5.2]
  def change
		create_table :list_items do |t|
			t.integer	:note_id, null: false
			t.string	:item, null: false
			t.boolean	:completed, null: false, default: false
			
			t.timestamps
			
			t.index	:note_id
    end
  end
end
