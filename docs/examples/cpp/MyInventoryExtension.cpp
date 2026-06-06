// Minimal C++ extension example. Add PrismMCPCore to your plugin module dependencies.

#include "Editor.h"
#include "MCPCommandRegistry.h"
#include "MCPExtensionRegistry.h"
#include "Modules/ModuleManager.h"
#include "PrismMCPBridge.h"

class FMyInventoryExtensionModule : public IModuleInterface
{
public:
	virtual void StartupModule() override
	{
		FCoreDelegates::OnPostEngineInit.AddRaw(this, &FMyInventoryExtensionModule::RegisterCommands);
	}

	virtual void ShutdownModule() override
	{
		if (Handle.IsValid() && GEditor)
		{
			if (UPrismMCPBridge* Bridge = GEditor->GetEditorSubsystem<UPrismMCPBridge>())
			{
				Bridge->GetRegistry().UnregisterExtensionCommand(Handle);
			}
		}
		Handle = FMCPExtensionHandle{};
	}

private:
	FMCPExtensionHandle Handle;

	void RegisterCommands()
	{
		if (!GEditor)
		{
			return;
		}

		UPrismMCPBridge* Bridge = GEditor->GetEditorSubsystem<UPrismMCPBridge>();
		if (!Bridge)
		{
			return;
		}

		FMCPExtensionEntry Entry;
		Entry.Name = TEXT("inventory_echo_item");
		Entry.Description = TEXT("Echo one inventory item id.");
		Entry.RequiredParams = {
			{TEXT("item_id"), EMCPParamType::String, TEXT("Inventory item id")}
		};
		Entry.Module = TEXT("inventory");
		Entry.Cluster = TEXT("read");
		Entry.Tier = EMCPToolTier::Lite;
		Entry.Source = TEXT("MyInventoryExtension");
		Entry.SourceType = TEXT("cpp_extension");
		Entry.ExtVersion = TEXT("1.0.0");
		Entry.Author = TEXT("Studio Team");
		Entry.Handler = [](const FMCPValidatedParams& Params) -> TSharedPtr<FJsonObject>
		{
			TSharedPtr<FJsonObject> Result = MakeShared<FJsonObject>();
			Result->SetBoolField(TEXT("success"), true);
			Result->SetStringField(TEXT("item_id"), Params.GetString(TEXT("item_id")));
			return Result;
		};

		Handle = Bridge->GetRegistry().RegisterExtensionCommand(MoveTemp(Entry));
	}
};

IMPLEMENT_MODULE(FMyInventoryExtensionModule, MyInventoryExtension)
